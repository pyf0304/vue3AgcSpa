﻿//import { clsUserIdentityWApi } from '../L3ForWApi/UserManage/clsUserIdentityWApi';
//import { clsvUsersWApi } from '../../TS4GP/L3ForWApi/BaseInfo/clsvUsersWApi';
//import { clsUsersWApi } from '../L3ForWApi/UserManage/clsUsersWApi';
//import { clsSectionWApi } from '../L3ForWApi/GraduateEdu/clsSectionWApi';
//import { clsExplainTypeWApi } from '../L3ForWApi/GraduateEdu/clsExplainTypeWApi';
//import { clsLiteratureTypeWApi } from '../L3ForWApi/GraduateEdu/clsLiteratureTypeWApi';
//import { clsOperationTypeWApi } from '../L3ForWApi/SysPara/clsOperationTypeWApi';
//import { clsSubViewpointTypeWApi } from '../L3ForWApi/GraduateEdu/clsSubViewpointTypeWApi';
//import { clsViewpointTypeWApi } from '../L3ForWApi/GraduateEdu/clsViewpointTypeWApi';
//import { clsXzClgWApi } from '../L3ForWApi/BaseInfo/clsXzClgWApi';
//import { clsAppraiseTypeWApi } from '../L3ForWApi/MicroTeachSenate/clsAppraiseTypeWApi';
//import { clsCommFun4WA4DiscussionType } from '../L2_BLL/GraduateEdu/clsCommFun4WA4DiscussionType';
//import { clsPaperWApi } from '../L3ForWApi/GraduateEdu/clsPaperWApi';
//import { clsCommFun4WA4Section } from '../L2_BLL/GraduateEdu/clsCommFun4WA4Section';
//import { clsDiscussionTypeWApi } from '../L3ForWApi/GraduateEdu/clsDiscussionTypeWApi';
//import { clsCommFun4WA4ExplainType } from '../L2_BLL/GraduateEdu/clsCommFun4WA4ExplainType';
//import { clsCommFun4WA4LiteratureType } from '../L2_BLL/GraduateEdu/clsCommFun4WA4LiteratureType';
//import { clsCommFun4WA4SubViewpointType } from '../L2_BLL/GraduateEdu/clsCommFun4WA4SubViewpointType';
//import { clsCommFun4WA4ViewpointType } from '../L2_BLL/GraduateEdu/clsCommFun4WA4ViewpointType';
//import { clsCommFun4WA4XzClg } from '../L2_BLL/BaseInfo/clsCommFun4WA4XzClg';
//import { clsCommFun4WA4XzMajor } from '../L2_BLL/BaseInfo/clsCommFun4WA4XzMajor';
//import { clsCommFun4WA4Paper } from '../L2_BLL/GraduateEdu/clsCommFun4WA4Paper';
//import { clsUserTypeWApi } from '../L3ForWApi/UserManage/clsUserTypeWApi';
//import { clsDiscussionTopicsWApi } from '../L3ForWApi/GraduateEdu/clsDiscussionTopicsWApi';
//import { clsDiscussionSubContentWApi } from '../L3ForWApi/GraduateEdu/clsDiscussionSubContentWApi';
//import { clsCommFun4WA4DiscussionTopics } from '../L2_BLL/GraduateEdu/clsCommFun4WA4DiscussionTopics';
//import { clsCommFun4WA4DiscussionSubContent } from '../L2_BLL/GraduateEdu/clsCommFun4WA4DiscussionSubContent';
//import { clsPaperReadWriteWApi } from '../L3ForWApi/GraduateEdu/clsPaperReadWriteWApi';
//import { clsCommFun4WA4PaperReadWrite } from '../L2_BLL/GraduateEdu/clsCommFun4WA4PaperReadWrite';
//import { clsPaperSubViewpointWApi } from '../L3ForWApi/GraduateEdu/clsPaperSubViewpointWApi';
//import { clsCommFun4WA4PaperSubViewpoint } from '../L2_BLL/GraduateEdu/clsCommFun4WA4PaperSubViewpoint';
//import { clsCommFun4WA4ResearchTopic } from '../L2_BLL/GraduateEdu/clsCommFun4WA4ResearchTopic';
//import { clsViewpointWApi } from '../L3ForWApi/GraduateEdu/clsViewpointWApi';
//import { clsCommFun4WA4Viewpoint } from '../L2_BLL/GraduateEdu/clsCommFun4WA4Viewpoint';
//import { clsUserStateWApi } from '../L3ForWApi/SysPara/clsUserStateWApi';
//import { clsDepartmentInfoWApi } from '../../TS4GP/L3ForWApi/BaseInfo/clsDepartmentInfoWApi';
//import { clsXzGradeBaseWApi } from '../L3ForWApi/SysPara/clsXzGradeBaseWApi';
//import { clsXzMajorDirectionWApi } from '../L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
//import { clsCommFun4WA4XzMajorDirection } from '../L2_BLL/BaseInfo/clsCommFun4WA4XzMajorDirection';
//import { clsConceptWApi } from '../L3ForWApi/GraduateEdu/clsConceptWApi';
//import { clsCommFun4WA4Concept } from '../L2_BLL/GraduateEdu/clsCommFun4WA4Concept';
//import { clsConceptAttachmentWApi } from '../L3ForWApi/GraduateEdu/clsConceptAttachmentWApi';
//import { clsCommFun4WA4ConceptAttachment } from '../L2_BLL/GraduateEdu/clsCommFun4WA4ConceptAttachment';
//import { clsConceptCitationWApi } from '../L3ForWApi/GraduateEdu/clsConceptCitationWApi';
//import { clsCommFun4WA4ConceptCitation } from '../L2_BLL/GraduateEdu/clsCommFun4WA4ConceptCitation';
//import { clsSchoolYearWApi } from '../L3ForWApi/SysPara/clsSchoolYearWApi';
//import { clsCurrEduClsWApi } from '../L3ForWApi/DailyRunning/clsCurrEduClsWApi';
//import { clsCommFun4WA4CurrEduCls } from '../L2_BLL/DailyRunning/clsCommFun4WA4CurrEduCls';
//import { clsSysScoreTypeWApi } from '../L3ForWApi/GraduateEdu/clsSysScoreTypeWApi';
//import { clsCommFun4WA4SysScoreType } from '../L2_BLL/GraduateEdu/clsCommFun4WA4SysScoreType';
//import { clsXzMajorTypeWApi } from '../L3ForWApi/CourseLearning/clsXzMajorTypeWApi';
//import { clsCommFun4WA4XzMajorType } from '../L2_BLL/CourseLearning/clsCommFun4WA4XzMajorType';
//import { clsCommFun4WA4cc_Course } from '../L2_BLL/CourseLearning/clsCommFun4WA4cc_Course';
//import { clscc_CourseWApi } from '../L3ForWApi/CourseLearning/clscc_CourseWApi';
//import { clsSchoolTermWApi } from '../L3ForWApi/SysPara/clsSchoolTermWApi';
//import { clsCommFun4WA4XzDegreeType } from '../L2_BLL/CourseLearning/clsCommFun4WA4XzDegreeType';
//import { clsXzDegreeTypeWApi } from '../L3ForWApi/CourseLearning/clsXzDegreeTypeWApi';
//import { clsTeachingSolutionWApi } from '../L3ForWApi/CourseLearning/clsTeachingSolutionWApi';
//import { clsCommFun4WA4TeachingSolution } from '../L2_BLL/CourseLearning/clsCommFun4WA4TeachingSolution';
//import { clsKcEduWayWApi } from '../L3ForWApi/CourseManage/clsKcEduWayWApi';
//import { clsClsRmTypeWApi } from '../L3ForWApi/SystemSet/clsClsRmTypeWApi';
//import { clsCommFun4WA4ClsRmType } from '../L2_BLL/ClassroomManage/clsCommFun4WA4ClsRmType';
//import { clsCommFun4WA4KcEduWay } from '../L2_BLL/CourseManage/clsCommFun4WA4KcEduWay';
//import { clsKcWkStatusWApi } from '../L3ForWApi/CourseManage/clsKcWkStatusWApi';
//import { clsXzUniZoneWApi } from '../L3ForWApi/SysPara/clsXzUniZoneWApi';
//import { clsCommFun4WA4KcWkStatus } from '../L2_BLL/CourseManage/clsCommFun4WA4KcWkStatus';
//import { clsCommFun4WA4KcCrsType } from '../L2_BLL/CourseManage/clsCommFun4WA4KcCrsType';
//import { clsKcCrsTypeWApi } from '../L3ForWApi/CourseManage/clsKcCrsTypeWApi';
//import { clsCjScoreTypeWApi } from '../L3ForWApi/ScoreManage/clsCjScoreTypeWApi';
//import { clsCjGetScoreWayWApi } from '../L3ForWApi/ScoreManage/clsCjGetScoreWayWApi';
//import { clsvCurrEduClsWApi } from '../L3ForWApi/DailyRunning/clsvCurrEduClsWApi';
//import { clsPk2EduClsTeacherTypeWApi } from '../L3ForWApi/DailyRunning/clsPk2EduClsTeacherTypeWApi';
//import { clsCommFun4WA4TeacherInfo } from '../L2_BLL/BaseInfo/clsCommFun4WA4TeacherInfo';
//import { clsCommFun4WA4Pk2EduClsTeacherType } from '../L2_BLL/DailyRunning/clsCommFun4WA4Pk2EduClsTeacherType';
//import { clsCommFun4WA4CurrEduClsTeacher } from '../L2_BLL/DailyRunning/clsCommFun4WA4CurrEduClsTeacher';
//import { clsCurrEduClsTeacherWApi } from '../L3ForWApi/DailyRunning/clsCurrEduClsTeacherWApi';
//import { clsCommFun4WA4cc_CourseType } from '../L2_BLL/CourseLearning/clsCommFun4WA4cc_CourseType';
//import { clscc_CourseTypeWApi } from '../L3ForWApi/CourseLearning/clscc_CourseTypeWApi';
//import { clsCommFun4WA4cc_ExcellentType } from '../L2_BLL/CourseLearning/clsCommFun4WA4cc_ExcellentType';
//import { clscc_ExcellentTypeWApi } from '../L3ForWApi/CourseLearning/clscc_ExcellentTypeWApi';
//import { clsXzMajorShoolTypeWApi } from '../L3ForWApi/BaseInfo/clsXzMajorShoolTypeWApi';
//import { clsCommFun4WA4XzMajorShoolType } from '../L2_BLL/BaseInfo/clsCommFun4WA4XzMajorShoolType';
//import { clsXzSchool_PsWApi } from '../L3ForWApi/SystemSet/clsXzSchool_PsWApi';
//import { clscc_ThemesWApi } from '../L3ForWApi/CourseLearning/clscc_ThemesWApi';
//import { clsCommFun4WA4cc_Themes } from '../L2_BLL/CourseLearning/clsCommFun4WA4cc_Themes';
//import { clsTopicObjectiveWApi } from '../L3ForWApi/GraduateEdu/clsTopicObjectiveWApi';
//import { clsCommFun4WA4TopicObjective } from '../L2_BLL/GraduateEdu/clsCommFun4WA4TopicObjective';
//import { clsCommFun4WA4SysOperationType } from '../L2_BLL/GraduateEdu/clsCommFun4WA4SysOperationType';
//import { clsSysOperationTypeWApi } from '../L3ForWApi/GraduateEdu/clsSysOperationTypeWApi';
//import { clsSysSecurityLevelWApi } from '../L3ForWApi/GraduateEdu/clsSysSecurityLevelWApi';
////import { clsCommFun4WA4SysSecurityLevel } from '../L2_BLL/GraduateEdu/clsCommFun4WA4SysSecurityLevel';
//import { clsCommFun4WA4Users } from '../L2_BLL/UserManage/clsCommFun4WA4Users';
//import { clsCommFun4WA4UserType } from '../L2_BLL/UserManage/clsCommFun4WA4UserType';
//import { clsCommFun4WA4UserState } from '../L2_BLL/SysPara/clsCommFun4WA4UserState';
//import { clsCommFun4WA4UserIdentity } from '../L2_BLL/UserManage/clsCommFun4WA4UserIdentity';
//import { clsCommFun4WA4XzGradeBase } from '../L2_BLL/SysPara/clsCommFun4WA4XzGradeBase';
//import { clsCommFun4WA4SchoolYear } from '../L2_BLL/SysPara/clsCommFun4WA4SchoolYear';
//import { clsCommFun4WA4OperationType } from '../L2_BLL/SysPara/clsCommFun4WA4OperationType';
//import { clsCommFun4WA4SchoolTerm } from '../L2_BLL/SysPara/clsCommFun4WA4SchoolTerm';
//import { clsCommFun4WA4XzUniZone } from '../L2_BLL/SysPara/clsCommFun4WA4XzUniZone';
//import { clsCommFun4WA4CjGetScoreWay } from '../L2_BLL/ScoreManage/clsCommFun4WA4CjGetScoreWay';
//import { clsCommFun4WA4CjScoreType } from '../L2_BLL/ScoreManage/clsCommFun4WA4CjScoreType';
//import { clsCommFun4WA4XzSchool_Ps } from '../L2_BLL/SysPara/clsCommFun4WA4XzSchool_Ps';
//import { clsCommFun4WA4SysSecurityLevel } from '../L2_BLL/GraduateEdu/clsCommFun4WA4SysSecurityLevel';

//export class clsPubFun {
//    public static SetCommFun4BL():void {
//        //clsUserIdentityWApi.objCommFun4BL = new clsCommFun4WA4UserIdentity();

//        //clsvUsersWApi
//        clsUserTypeWApi.objCommFun4BL = new clsCommFun4WA4UserType();
//        clsUserStateWApi.objCommFun4BL = new clsCommFun4WA4UserState();
//        clsUserIdentityWApi.objCommFun4BL = new clsCommFun4WA4UserIdentity();

//        clsXzClgWApi.objCommFun4BL = new clsCommFun4WA4XzClg();
//        clsXzGradeBaseWApi.objCommFun4BL = new clsCommFun4WA4XzGradeBase();

//        clsSchoolYearWApi.objCommFun4BL = new clsCommFun4WA4SchoolYear();
//        clsCurrEduClsWApi.objCommFun4BL = new clsCommFun4WA4CurrEduCls();

//        //clsDepartmentInfoWApi.objCommFun4BL = new clsCommFun4WA4DepartmentInfo();

//        clsLiteratureTypeWApi.objCommFun4BL = new clsCommFun4WA4LiteratureType();
//        clsSectionWApi.objCommFun4BL = new clsCommFun4WA4Section();
//        clsExplainTypeWApi.objCommFun4BL = new clsCommFun4WA4ExplainType();
//        clsSubViewpointTypeWApi.objCommFun4BL = new clsCommFun4WA4SubViewpointType();

//        clsOperationTypeWApi.objCommFun4BL = new clsCommFun4WA4OperationType();
//        clsViewpointTypeWApi.objCommFun4BL = new clsCommFun4WA4ViewpointType();

//        //clsAppraiseTypeWApi.objCommFun4BL = new clscom clsCommFun4WA4AppraiseType();
//        clsDiscussionTypeWApi.objCommFun4BL = new clsCommFun4WA4DiscussionType();

//        //clsUsersWApi.objCommFun4BL = new clsCommFun4WA4Users();
//        clsUsersWApi.objCommFun4BL = new clsCommFun4WA4Users();

//        clsDiscussionTopicsWApi.objCommFun4BL = new clsCommFun4WA4DiscussionTopics();
//        clsDiscussionSubContentWApi.objCommFun4BL = new clsCommFun4WA4DiscussionSubContent();

//        clsPaperWApi.objCommFun4BL = new clsCommFun4WA4Paper();
//        clsPaperReadWriteWApi.objCommFun4BL = new clsCommFun4WA4PaperReadWrite();
//        clsPaperSubViewpointWApi.objCommFun4BL = new clsCommFun4WA4PaperSubViewpoint();

//        clsViewpointWApi.objCommFun4BL = new clsCommFun4WA4Viewpoint();

//        //专业方向
//        clsXzMajorDirectionWApi.objCommFun4BL = new clsCommFun4WA4XzMajorDirection();

//        //主题概念
//        clsConceptWApi.objCommFun4BL = new clsCommFun4WA4Concept();
//        clsConceptAttachmentWApi.objCommFun4BL = new clsCommFun4WA4ConceptAttachment();
//        clsConceptCitationWApi.objCommFun4BL = new clsCommFun4WA4ConceptCitation();

//        clsSysScoreTypeWApi.objCommFun4BL = new clsCommFun4WA4SysScoreType();

//        clsXzMajorTypeWApi.objCommFun4BL = new clsCommFun4WA4XzMajorType();

//        clscc_CourseWApi.objCommFun4BL = new clsCommFun4WA4cc_Course();

//        clsSchoolTermWApi.objCommFun4BL = new clsCommFun4WA4SchoolTerm();

//        clsXzDegreeTypeWApi.objCommFun4BL = new clsCommFun4WA4XzDegreeType()

//        clsTeachingSolutionWApi.objCommFun4BL = new clsCommFun4WA4TeachingSolution();
//        clsXzClgWApi.objCommFun4BL = new clsCommFun4WA4XzClg();
//        clsKcEduWayWApi.objCommFun4BL = new clsCommFun4WA4KcEduWay();
//        clsClsRmTypeWApi.objCommFun4BL = new clsCommFun4WA4ClsRmType();
//        clsKcWkStatusWApi.objCommFun4BL = new clsCommFun4WA4KcWkStatus();
//        clsXzUniZoneWApi.objCommFun4BL = new clsCommFun4WA4XzUniZone();
//        clsXzGradeBaseWApi.objCommFun4BL = new clsCommFun4WA4XzGradeBase();
//        clsKcCrsTypeWApi.objCommFun4BL = new clsCommFun4WA4KcCrsType();
//        clsCjScoreTypeWApi.objCommFun4BL = new clsCommFun4WA4CjScoreType();
//        clsCjGetScoreWayWApi.objCommFun4BL = new clsCommFun4WA4CjGetScoreWay();

//        clsCurrEduClsTeacherWApi.objCommFun4BL = new clsCommFun4WA4CurrEduClsTeacher();
//        clscc_CourseTypeWApi.objCommFun4BL = new clsCommFun4WA4cc_CourseType();
//        clsPk2EduClsTeacherTypeWApi.objCommFun4BL = new clsCommFun4WA4Pk2EduClsTeacherType();
//        clscc_ExcellentTypeWApi.objCommFun4BL = new clsCommFun4WA4cc_ExcellentType();

//        clsXzMajorShoolTypeWApi.objCommFun4BL = new clsCommFun4WA4XzMajorShoolType();

//        clsXzSchool_PsWApi.objCommFun4BL = new clsCommFun4WA4XzSchool_Ps();

//        clscc_ThemesWApi.objCommFun4BL = new clsCommFun4WA4cc_Themes();

//        clsTopicObjectiveWApi.objCommFun4BL = new clsCommFun4WA4TopicObjective();

//        clsSysOperationTypeWApi.objCommFun4BL = new clsCommFun4WA4SysOperationType();
//        clsSysSecurityLevelWApi.objCommFun4BL = new clsCommFun4WA4SysSecurityLevel();

//    }
//}

/**
 * 从strSortBy中提取排序表达式和排序方向（如 constName asc/desc）
 * @param strSortBy 例如: "GCDefaConstants|constName asc|GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId；"
 * @returns { strSortExpress: string, strSortDirection: string }
 */
export function extractSortExpressAndDirection(strSortBy: string): {
  strSortExpress: string;
  strSortDirection: string;
} {
  if (!strSortBy || strSortBy.indexOf('|') < 0) {
    return { strSortExpress: '', strSortDirection: '' };
  }
  const parts = strSortBy.split('|');
  for (const part of parts) {
    const trimmed = part.trim();
    // 匹配 "字段名 asc" 或 "字段名 desc"，不区分大小写
    const match = trimmed.match(/^([a-zA-Z0-9_]+)\s+(asc|desc)$/i);
    if (match) {
      return {
        strSortExpress: match[1],
        strSortDirection: match[2].toLowerCase(),
      };
    }
  }
  return { strSortExpress: '', strSortDirection: '' };
}

// 用法示例：
// const str = "GCDefaConstants|constName asc|GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId；";
// const result = extractSortExpressAndDirection(str);
// result.strSortExpress === 'constName'
// result.strSortDirection === 'asc'
