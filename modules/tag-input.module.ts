import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2DropdownModule } from '@vpetrusevici/ng2-material-dropdown';
import { HighlightPipe } from './core';
import { DragProvider } from './core';
import { OptionsProvider, Options } from './core';
import { TagInputComponent } from './components';
import { DeleteIconComponent } from './components';
import { TagInputForm } from './components';
import { TagComponent } from './components';
import { TagInputDropdown } from './components';
import { TagRipple } from './components';

const optionsProvider = new OptionsProvider();

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2DropdownModule
    ],
    declarations: [
        TagInputComponent,
        DeleteIconComponent,
        TagInputForm,
        TagComponent,
        HighlightPipe,
        TagInputDropdown,
        TagRipple
    ],
    exports: [
        TagInputComponent,
        DeleteIconComponent,
        TagInputForm,
        TagComponent,
        HighlightPipe,
        TagInputDropdown,
        TagRipple
    ],
    providers: [
        DragProvider,
        { provide: COMPOSITION_BUFFER_MODE, useValue: false },
    ]
})
export class TagInputModule {
    /**
     * @name withDefaults
     * @param options {Options}
     */
    public static withDefaults(options: Options): void {
        optionsProvider.setOptions(options);
    }
}
