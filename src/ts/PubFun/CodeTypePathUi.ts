import { createVNode } from 'vue';
import { Modal, message } from 'ant-design-vue';

export interface CodeTypePathDialogOptions {
  title?: string;
  codeTypeName: string;
  codeTypeId: string;
  codePath: string;
  codePathBackup: string;
  restoreCodePath?: string;
  restoreCodePathBackup?: string;
  restoreButtonText?: string;
  summaryLines?: Array<string>;
}

export interface CodeTypePathDialogResult {
  codePath: string;
  codePathBackup: string;
}

export interface CodeTypeTooltipOptions {
  codePathTip: string;
  dependsOn?: string;
  overwriteEnabled?: boolean;
  targetRequired?: boolean;
  targetLabel?: string;
  targetValue?: string;
  extraLines?: Array<string>;
}

const inputStyle =
  'width:100%;padding:6px 11px;border:1px solid #d9d9d9;border-radius:6px;line-height:1.5715;';

export function buildCodeTypeTooltip(options: CodeTypeTooltipOptions): string {
  const arrLine = new Array<string>();
  arrLine.push(options.codePathTip);
  arrLine.push(`依赖类型: ${options.dependsOn || '(未知)'}`);

  if (options.targetRequired === true) {
    arrLine.push(
      `TabId要求: 必填(${options.targetLabel || '目标Id'}: ${options.targetValue || '空'})`,
    );
  } else {
    arrLine.push('TabId要求: 非必填');
  }

  if (options.overwriteEnabled === true) {
    arrLine.push('覆盖策略: 可覆盖');
  } else if (options.overwriteEnabled === false) {
    arrLine.push('覆盖策略: 不可覆盖');
  } else {
    arrLine.push('覆盖策略: (未知)');
  }

  if (options.extraLines != null && options.extraLines.length > 0) {
    arrLine.push(...options.extraLines.filter((x) => x.length > 0));
  }
  return arrLine.join('\n');
}

export async function showCodeTypePathEditDialog(
  options: CodeTypePathDialogOptions,
): Promise<CodeTypePathDialogResult | null> {
  let strCodePath = options.codePath ?? '';
  let strCodePathBackup = options.codePathBackup ?? '';
  let bolSettled = false;
  let refCodePathInput: HTMLInputElement | null = null;
  let refCodePathBackupInput: HTMLInputElement | null = null;

  const applyRestoreValue = () => {
    strCodePath = options.restoreCodePath ?? '';
    strCodePathBackup = options.restoreCodePathBackup ?? '';
    if (refCodePathInput != null) {
      refCodePathInput.value = strCodePath;
    }
    if (refCodePathBackupInput != null) {
      refCodePathBackupInput.value = strCodePathBackup;
    }
  };

  return await new Promise<CodeTypePathDialogResult | null>((resolve) => {
    Modal.confirm({
      title: options.title || `设置代码类型路径`,
      width: 760,
      okText: '保存',
      cancelText: '取消',
      content: createVNode('div', { style: 'padding-top: 8px;' }, [
        createVNode(
          'div',
          {
            style:
              'margin-bottom: 14px;padding: 10px 12px;background: #fafafa;border: 1px solid #f0f0f0;border-radius: 6px;white-space: pre-line;line-height: 1.7;color: #555;',
          },
          [
            createVNode(
              'div',
              { style: 'margin-bottom: 6px;font-weight: 600;color: #222;' },
              `${options.codeTypeName}(${options.codeTypeId})`,
            ),
            ...(options.summaryLines ?? []).map((x) => createVNode('div', null, x)),
          ],
        ),
        createVNode(
          'div',
          { style: 'margin-bottom: 6px;font-weight: 500;color: #222;' },
          '生成路径',
        ),
        createVNode(
          'div',
          { style: 'margin-bottom: 8px;text-align: right;' },
          createVNode(
            'button',
            {
              type: 'button',
              class: 'ant-btn ant-btn-link ant-btn-sm',
              style: 'padding-right: 0;',
              onClick: applyRestoreValue,
            },
            options.restoreButtonText || '恢复为应用根路径',
          ),
        ),
        createVNode('input', {
          value: strCodePath,
          placeholder: '请输入生成路径',
          style: inputStyle,
          ref: (el: any) => {
            refCodePathInput = el as HTMLInputElement | null;
          },
          onInput: (evt: Event) => {
            strCodePath = String((evt.target as HTMLInputElement | null)?.value ?? '');
          },
        }),
        createVNode(
          'div',
          { style: 'margin: 14px 0 6px;font-weight: 500;color: #222;' },
          '备份路径(可空)',
        ),
        createVNode('input', {
          value: strCodePathBackup,
          placeholder: '请输入备份路径',
          style: inputStyle,
          ref: (el: any) => {
            refCodePathBackupInput = el as HTMLInputElement | null;
          },
          onInput: (evt: Event) => {
            strCodePathBackup = String((evt.target as HTMLInputElement | null)?.value ?? '');
          },
        }),
      ]),
      onOk: async () => {
        const strCodePath2 = strCodePath.trim();
        const strCodePathBackup2 = strCodePathBackup.trim();
        if (strCodePath2.length === 0) {
          message.error('代码路径不能为空！');
          return Promise.reject();
        }
        bolSettled = true;
        resolve({
          codePath: strCodePath2,
          codePathBackup: strCodePathBackup2,
        });
        return Promise.resolve();
      },
      onCancel: () => {
        if (bolSettled === false) {
          resolve(null);
        }
      },
    });
  });
}
