import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons'
import { NZ_ICONS } from 'ng-zorro-antd/icon'

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzFlexModule } from 'ng-zorro-antd/flex';

export const NzModules = {
    NzUpload : [
        NzUploadModule,
    ],
    NzSpin : [
        NzSpinModule,
    ],
    NzLayout :[
        NzLayoutModule,
    ],
    NzSlider : [
        NzSliderModule,
    ],
    NzMenu : [
        NzMenuModule,
    ],
    NzToolTip : [
        NzToolTipModule,
    ],
    NzDrawer : [
        NzDrawerModule,
        NzSpinModule,
    ],
    NzTable : [
        NzTableModule,
        NzPaginationModule,
        NzInputModule,
        NzDropDownModule,
        NzButtonModule,
        NzDatePickerModule,
    ],
    NzCollapse : [
        NzCollapseModule
    ],
    NzAvatar : [
        NzAvatarModule
    ],
    NzModal : [
        NzModalModule
    ],
    NzPopover : [
        NzPopoverModule
    ],
    NzDivider : [
        NzDividerModule
    ],
    NzTimeline : [
        NzTimelineModule
    ],
    NzTag : [
        NzTagModule
    ],
    NzInput : [
        NzInputModule
    ],
    NzIcon : [
        NzIconModule
    ],
    NzDropDown : [
        NzDropDownModule
    ],
    NzSkeleton : [
        NzSkeletonModule
    ],
    NzBadge : [
        NzBadgeModule
    ],
    NzCarousel : [
        NzCarouselModule
    ],
    NzButton : [
        NzButtonModule
    ],
    NzFlex : [
        NzFlexModule
    ],
    NzDatePicker : [
        NzDatePickerModule
    ],
    NzSwitch : [
        NzSwitchModule
    ],
    NzSelect : [
        NzSelectModule
    ],
    NzTabs : [
        NzTabsModule
    ],
    NzTree : [
        NzTreeModule
    ],
    NzProgress: [
        NzProgressModule
    ],
    NzAlert: [
        NzAlertModule
    ],
    NzPopconfirm: [
        NzPopconfirmModule
    ],
    NzCheckbox: [
        NzCheckboxModule
    ],
    NzRadio: [
        NzRadioModule
    ]
};