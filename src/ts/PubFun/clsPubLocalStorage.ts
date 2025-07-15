export class clsPubLocalStorage {
  //获取教学班Id
  public static get idCurrEduCls(): string {
    const strKey = 'idCurrEduCls';
    let strIdCurrEduCls = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strIdCurrEduCls = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存idCurrEduCls为空！');
    }
    return strIdCurrEduCls;
  }

  //设置教学班Id
  public static set idCurrEduCls(strIdCurrEduCls: string) {
    try {
      //清空本类缓存
      const strKey = 'idCurrEduCls';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strIdCurrEduCls);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }
  //////////////////////////////////////////////////////////课程Id/////////////////////////////////////////////////////////////
  //获取课程Id
  public static get courseId(): string {
    const strKey = 'courseId';
    let strCourseId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCourseId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存courseId为空！');
    }
    return strCourseId;
  }

  //设置课程Id
  public static set courseId(strCourseId: string) {
    try {
      //清空本类缓存
      const strKey = 'courseId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCourseId);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //获取课程名称
  public static get courseName(): string {
    const strKey = 'courseName';
    let strCourseName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCourseName = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存strCourseName为空！');
    }
    return strCourseName;
  }

  //设置课程名称
  public static set courseName(strCourseName: string) {
    try {
      //清空本类缓存
      const strKey = 'courseName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCourseName);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////教学班类型Id/////////////////////////////////////////////////////////////
  //获取教学班Id
  public static get eduClsTypeId(): string {
    const strKey = 'eduClsTypeId';
    let strEduClsTypeId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strEduClsTypeId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存strEduClsTypeId为空！');
    }
    return strEduClsTypeId;
  }

  //设置教学班Id
  public static set eduClsTypeId(strEduClsTypeId: string) {
    try {
      //清空本类缓存
      const strKey = 'eduClsTypeId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strEduClsTypeId);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }
  //////////////////////////////////////////////////////////教学班/////////////////////////////////////////////////////////////
  //获取教学班名称
  public static get eduClsName(): string {
    const strKey = 'eduClsName';
    let strIdCurrEduCls = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strIdCurrEduCls = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存eduClsName为空！');
    }
    return strIdCurrEduCls;
  }

  //设置教学班名称
  public static set eduClsName(strEduClsName: string) {
    try {
      //清空本类缓存
      const strKey = 'eduClsName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strEduClsName);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////学生流水号/////////////////////////////////////////////////////////////
  //获取学生流水号ID
  public static get idStu(): string {
    const strKey = 'idStudentInfo';
    let strUserId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strUserId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存userId为空！');
    }
    return strUserId;
  }
  //设置学生流水号Id
  public static set idStu(strUserId: string) {
    try {
      //清空本类缓存
      const strKey = 'idStudentInfo';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strUserId);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////主题用户关系列表/////////////////////////////////////////////////////////////
  //获取主题用户关系
  public static get TopicUserList(): string {
    const strKey = 'TopicUserList';
    let strTopicUserList = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strTopicUserList = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存strEduClsTypeId为空！');
    }
    return strTopicUserList;
  }

  //设置主题用户关系
  public static set TopicUserList(strTopicUserList: string) {
    try {
      //清空本类缓存
      const strKey = 'TopicUserList';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strTopicUserList);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////专业ID/////////////////////////////////////////////////////////////
  //专业ID
  public static get idXzMajor(): string {
    const strKey = 'idXzMajor';
    let strIdXzMajor = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strIdXzMajor = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存idXzMajor为空！');
    }
    return strIdXzMajor;
  }

  //设置用户Id
  public static set idXzMajor(strIdXzMajor: string) {
    try {
      //清空本类缓存
      const strKey = 'idXzMajor';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strIdXzMajor);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////专业/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get majorName(): string {
    const strKey = 'majorName';
    let strMajorName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strMajorName = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存majorName为空！');
    }
    return strMajorName;
  }

  //设置用户Id
  public static set majorName(strMajorName: string) {
    try {
      //清空本类缓存
      const strKey = 'majorName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strMajorName);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////用户Id/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get userId(): string {
    const strKey = 'userId';
    let strUserId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strUserId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存userId为空！');
    }
    return strUserId;
  }
  //设置用户Id
  public static set userId(strUserId: string) {
    try {
      //清空本类缓存
      const strKey = 'userId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strUserId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////角色Id/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get roleId(): string {
    const strKey = 'roleId';
    let strRoleId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strRoleId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存roleId为空！');
    }
    return strRoleId;
  }

  //设置用户Id
  public static set roleId(strRoleId: string) {
    try {
      //清空本类缓存
      const strKey = 'roleId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strRoleId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  //////////////////////////////////////////////////////////角色名称/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get roleName(): string {
    const strKey = 'roleName';
    let strRoleName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strRoleName = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存roleName为空！');
    }
    return strRoleName;
  }

  //设置用户Id
  public static set roleName(strRoleName: string) {
    try {
      //清空本类缓存
      const strKey = 'roleName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strRoleName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  //////////////////////////////////////////////////////////用户名称/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get userName(): string {
    const strKey = 'userName';
    let strUserName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strUserName = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存UserName为空！');
    }
    return strUserName;
  }

  //设置用户Id
  public static set userName(strUserName: string) {
    try {
      //清空本类缓存
      const strKey = 'userName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strUserName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////专业/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get majorDirectionId(): string {
    const strKey = 'majorDirectionId';
    let strMajorDirectionId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strMajorDirectionId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存majorDirectionId为空！');
    }
    return strMajorDirectionId;
  }

  //设置用户Id
  public static set majorDirectionId(strMajorDirectionId: string) {
    try {
      //清空本类缓存
      const strKey = 'majorDirectionId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strMajorDirectionId);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////专业/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get majorDirectionName(): string {
    const strKey = 'majorDirectionName';
    let strMajorDirectionName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strMajorDirectionName = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存majorDirectionName为空！');
    }
    return strMajorDirectionName;
  }

  //设置用户Id
  public static set majorDirectionName(strMajorDirectionName: string) {
    try {
      //清空本类缓存
      const strKey = 'majorDirectionName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strMajorDirectionName);
    } catch (e) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }
}
