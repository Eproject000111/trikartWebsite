
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRippleModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
// import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/helpers/date-format.helper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatTabsModule} from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { ChartistModule } from 'ng-chartist';
import {MatChipsModule} from '@angular/material/chips';
import { CdkDrag, DragDropModule, CdkDragDrop, CdkDropList,  } from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';



export const MatModules = {
    Forms : [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
    ],
    Date : [
        MatDatepickerModule,
    ],
    Expansion : [
        MatExpansionModule
    ],
    Icons : [
        MatIconModule
    ],
    Clipboard : [
        ClipboardModule
    ],
    Dialog : [
        MatDialogModule
    ],
    Ripple : [
        MatRippleModule,
    ],
    Divider : [
        MatDividerModule,
    ],
    Tab : [
        MatTabsModule,
    ],
    Toolbar : [
        MatToolbarModule
    ],
    Slider : [
        MatSliderModule
    ],
    SlideToggle : [
        MatSlideToggleModule
    ],
    Menu : [
        MatMenuModule
    ],
    DragDrop : [
        CdkDrag,
        CdkDropList,
    ],
    Card : [
        MatCardModule
    ],
    MatStepper : [
        MatStepperModule
    ],
    MatChips : [
        MatChipsModule
    ]
}
