/* tslint:disable:quotemark */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppComponent} from './app.component';

import {AppMenuComponent} from './view/shared/slide-bar/app.menu.component';
import {AppMenuitemComponent} from './view/shared/slide-bar/app.menuitem.component';
import {AppTopBarComponent} from './view/shared/top-bar/app.topbar.component';
import {AppFooterComponent} from './view/shared/footer/app.footer.component';

import {MenuService} from './view/shared/slide-bar/app.menu.service';

import {ParcoursEditComponent} from './view/admin/learn/parcours-edit/parcours-edit.component';
import {CoursListComponent} from './view/admin/learn/cours-list/cours-list.component';
import {CoursEditComponent} from './view/admin/learn/cours-edit/cours-edit.component';
import {SectionListComponent} from './view/admin/learn/section-list/section-list.component';
import {SectionViewComponent} from './view/admin/learn/section-view/section-view.component';
import {SectionEditComponent} from './view/admin/learn/section-edit/section-edit.component';
import {LearnComponent} from './view/admin/learn/learn.component';
import {ParcoursListComponent} from './view/admin/learn/parcours-list/parcours-list.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {QuizViewComponent} from './view/prof/Classes/profclasses/quiz-view/quiz-view.component';
import {EtudiantssViewComponent} from './view/admin/etudiants/etudiantss-view/etudiantss-view.component';
import {ClassRoomListComponent} from './view/prof/Classes/profclasses/class-room-list/class-room-list.component';
import {HomeComponent} from './view/prof/home/home.component';
import {ProfclassesComponent} from './view/prof/Classes/profclasses/profclasses.component';
import {EtudiantttViewComponent} from './view/prof/Classes/profclasses/etudianttt-view/etudianttt-view.component';
import {EtudiantCreateComponent} from './view/admin/etudiants/etudiant-create/etudiant-create.component';
import {EtudiantEditComponent} from './view/admin/etudiants/etudiant-edit/etudiant-edit.component';
import {EtudiantListComponent} from './view/admin/etudiants/etudiant-list/etudiant-list.component';
import {InscriptionCreateComponent} from './view/admin/validate-inscriptions/inscription-create/inscription-create.component';
import {InscriptionEditComponent} from './view/admin/validate-inscriptions/inscription-edit/inscription-edit.component';
import {InscriptionListComponent} from './view/admin/validate-inscriptions/inscription-list/inscription-list.component';
import {InscriptionViewComponent} from './view/admin/validate-inscriptions/inscription-view/inscription-view.component';
import {InscriptionsComponent} from './view/admin/validate-inscriptions/inscriptions.component';
import {CategorieProfViewComponent} from './view/prof/salary-teacher/categorie-prof-view/categorie-prof-view.component';
import {CoursesComponent} from './view/prof/learn-teacher/courses/courses.component';
import {EdCoursesComponent} from './view/prof/learn-teacher/parcours/ed-courses.component';
import {SalaryComponent} from './view/prof/salary-teacher/salary/salary.component';
import {SafePipe2, SectionsComponent} from './view/prof/learn-teacher/sections/sections.component';
import {EtudiantsComponent} from './view/admin/etudiants/etudiants.component';
import {QuizPreviewComponent} from './view/admin/quiz/quiz-preview/quiz-preview.component';
import {QuizConfigComponent} from './view/admin/quiz/quiz-config/quiz-config.component';
import {ScheduleComponent} from './view/prof/schedule/schedule.component';
import {FaqAnswerComponent} from './view/admin/faq-admin/faq-answer/faq-answer.component';
import {NewsAdminListComponent} from './view/admin/news-admin/news-admin-list/news-admin-list.component';
import {NewsAdminViewComponent} from './view/admin/news-admin/news-admin-view/news-admin-view.component';
import {NewsAdminCreateComponent} from './view/admin/news-admin/news-admin-create/news-admin-create.component';
import {NewsTeacherListComponent} from './view/prof/news/news-teacher-list/news-teacher-list.component';
import {NewsTeacherViewComponent} from './view/prof/news/news-teacher-view/news-teacher-view.component';
import {FaqListComponent} from './view/prof/faq/faq-list/faq-list.component';
import {FaqContactComponent} from './view/prof/faq/faq-contact/faq-contact.component';
import {SafePipe1, SectionSimulateComponent} from './view/prof/learn-teacher/section-simulate/section-simulate.component';
import {ChooseViewComponent} from './view/prof/learn-teacher/choose-view/choose-view.component';
import {ParcoursCreateComponent} from './view/admin/learn/parcours-create/parcours-create.component';
import {CoursCreateComponent} from './view/admin/learn/cours-create/cours-create.component';
import {HomeTeacherComponent} from './view/prof/home-teacher/home-teacher.component';
import {TeacherRubComponent} from './view/prof/home-teacher/teacher-rub/teacher-rub.component';
import {ProfNewsComponent} from './view/prof/home-teacher/prof-news/prof-news.component';
import {NearestComponent} from './view/prof/home-teacher/nearest/nearest.component';
import {AjoutEtudiantComponent} from './view/prof/home-teacher/ajout-etudiant/ajout-etudiant.component';
import {RecommendComponent} from './view/prof/recommend/recommend.component';
import {RecommendationComponent} from './view/prof/recommend/recommendation/recommendation.component';
import {RecommendEditComponent} from './view/prof/recommend/recommend-edit/recommend-edit.component';
import {RecommendListComponent} from './view/prof/recommend/recommend-list/recommend-list.component';
import {RecommendViewComponent} from './view/prof/recommend/recommend-view/recommend-view.component';
import {QuizCreateComponent} from './view/admin/quiz/quiz-create/quiz-create.component';
import {QuizEtudiantViewComponent} from './view/etudiant/Quiz/quiz-etudiant-view/quiz-etudiant-view.component';
import {SessionCoursEditComponent} from './view/prof/session-cours/session-cours-edit/session-cours-edit.component';
import {SessionCoursCreateComponent} from './view/prof/session-cours/session-cours-create/session-cours-create.component';
import {SessionCoursViewComponent} from './view/prof/session-cours/session-cours-view/session-cours-view.component';
import {SessionCoursListComponent} from './view/prof/session-cours/session-cours-list/session-cours-list.component';
import {SyntheseSessionCoursListComponent} from './view/prof/synthese-session/synthese-session-cours-list/synthese-session-cours-list.component';
import {SyntheseSessionCoursEditComponent} from './view/prof/synthese-session/synthese-session-cours-edit/synthese-session-cours-edit.component';
import {ProfesseurListComponent} from './view/admin/professeur/professeur-list/professeur-list.component';
import {ProfesseurCreateComponent} from './view/admin/professeur/professeur-create/professeur-create.component';
import {ProfesseurEditComponent} from './view/admin/professeur/professeur-edit/professeur-edit.component';
import {ProfesseurViewComponent} from './view/admin/professeur/professeur-view/professeur-view.component';
import {EtudiantParcoursComponent} from './view/etudiant/learn-etudiant/etudiant-parcours/etudiant-parcours.component';
import {EtudiantCoursesComponent} from './view/etudiant/learn-etudiant/etudiant-courses/etudiant-courses.component';
import {
    SafePipe,
    StudentSimulateSectionComponent
} from './view/etudiant/learn-etudiant/student-simulate-section/student-simulate-section.component';
import {RecommendAdminComponent} from './view/admin/recommend-admin/recommend-admin.component';
import {FaqCreateComponent} from './view/admin/faq-admin/faq-create/faq-create.component';
import {FaqStudentListComponent} from './view/etudiant/FAQ-etudiant/faq-student/faq-student-list/faq-student-list.component';
import {FaqAdminListComponent} from './view/admin/faq-admin/faq-admin-list/faq-admin-list.component';
import {FaqContactListComponent} from './view/prof/faq/faq-contact-list/faq-contact-list.component';
import {FaqStudentContactComponent} from './view/etudiant/FAQ-etudiant/faq-student-contact/faq-student-contact.component';
import {FaqStudentContactListeComponent} from './view/etudiant/FAQ-etudiant/faq-student-contact-liste/faq-student-contact-liste.component';
import {DictionaryCreateComponent} from './view/etudiant/learn-etudiant/Dictionnary/dictionary-create/dictionary-create.component';
import {NewsEtudiantListComponent} from './view/etudiant/news-etudiant/news-etudiant-list/news-etudiant-list.component';
import {NewsEtudiantViewComponent} from './view/etudiant/news-etudiant/news-etudiant-view/news-etudiant-view.component';
import {NewsAdminEditComponent} from './view/admin/news-admin/news-admin-edit/news-admin-edit.component';
import {NewsAdminDeleteComponent} from './view/admin/news-admin/news-admin-delete/news-admin-delete.component';
import {PaiementComponent} from './view/admin/paiement/paiement.component';
import {PaiementListComponent} from './view/admin/paiement/paiement-list/paiement-list.component';
import {ScheduleAdminComponent} from './view/admin/schedule-admin/schedule-admin.component';
import {ScheduleStudentComponent} from './view/etudiant/schedule-student/schedule-student.component';
import {QuizUpdateComponent} from './view/admin/quiz/quiz-update/quiz-update.component';
import {SectionItemComponent} from './view/admin/learn/section-item/section-item.component';
import {SectionCreateComponent} from './view/admin/learn/section-create/section-create.component';
import {QuizTakeComponent} from './view/etudiant/Quiz/quiz-take/quiz-take.component';
import {ChatComponent} from './view/prof/learn-teacher/chat/chat.component';
import {Chat1Component} from './view/etudiant/learn-etudiant/chat/chat1-component.component';
import {DictionaryEditComponent} from './view/etudiant/learn-etudiant/Dictionnary/dictionary-edit/dictionary-edit.component';
import {ViewQuizEtudiantComponent} from './view/admin/view-quiz-etudiant/view-quiz-etudiant.component';
import {SectionItemPreviewComponent} from './view/admin/learn/section-item-preview/section-item-preview.component';
import {ImageItemComponent} from './view/admin/learn/section-item-preview/image-item/image-item.component';
import { TranslateComponent } from './view/etudiant/learn-etudiant/Dictionnary/translate/translate.component';
import { EtudiantReviewViewComponent } from './view/etudiant/learn-etudiant/etudiant-review-view/etudiant-review-view.component';
// tslint:disable-next-line:max-line-length
import {SyntheseSessionHistoryComponent} from './view/prof/synthese-session/synthese-session-history/synthese-session-history.component';

import { RecommendationTeacherComponent } from './view/prof/recommendation-teacher/recommendation-teacher.component';
import { VocabularySectionComponent } from './view/etudiant/learn-etudiant/vocabulary-section/vocabulary-section.component';
import { VocabularySectionItemComponent } from './view/etudiant/learn-etudiant/vocabulary-section/vocabulary-section-item/vocabulary-section-item.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DashboardDemoComponent} from './view/public/landing/dashboarddemo.component';
import { AdminComponent } from './view/admin/admin.component';
import { EtudiantComponent } from './view/etudiant/etudiant.component';
import { ProfComponent } from './view/prof/prof.component';
import { PublicComponent } from './view/public/public.component';
import { VocabularySectionProfComponent } from './view/prof/learn-teacher/vocabulary-section-prof/vocabulary-section-prof.component';
import { VocabularySectionItemProfComponent } from './view/prof/learn-teacher/vocabulary-section-prof/vocabulary-section-item-prof/vocabulary-section-item-prof.component';
import {SyntheseSessionComponent} from "./view/prof/synthese-session/synthese-session.component";
import {SyntheseSessionCoursCreateComponent} from "./view/prof/synthese-session/synthese-session-cours-create/synthese-session-cours-create.component";
import {ProfReviewViewComponent} from "./view/prof/learn-teacher/prof-review-view/prof-review-view.component";
import {QuizPreviewProfComponent} from './view/prof/quiz-preview-prof/quiz-preview.component';
import { AgentComponent } from './view/agent/agent.component';
import { TransactionEmissionComponent } from './view/agent/transaction-emission/transaction-emission.component';
import { TransactionServirComponent } from './view/agent/transaction-servir/transaction-servir.component';
import { TransactionExtournComponent } from './view/agent/transaction-extourn/transaction-extourn.component';
import { TransactionRestitutionComponent } from './view/agent/transaction-restitution/transaction-restitution.component';
import { TransactionHistoriqueComponent } from './view/agent/transaction-historique/transaction-historique.component';
import { ClientManagementComponent } from './view/agent/client-management/client-management.component';
import { LoginAgentComponent } from './view/public/login-agent/login-agent.component';
import { LoginAdmineComponent } from './view/public/login-admine/login-admine.component';
import { AdmineComponent } from './view/admine/admine.component';
import { TransactionConsultationComponent } from './view/admine/transaction-consultation/transaction-consultation.component';
import { TransactionBloquageComponent } from './view/admine/transaction-bloquage/transaction-bloquage.component';
import { TransactionDebloquageComponent } from './view/admine/transaction-debloquage/transaction-debloquage.component';
import { TransactionNotificationComponent } from './view/admine/transaction-notification/transaction-notification.component';
import { PlafondConfigComponent } from './view/admine/plafond-config/plafond-config.component';
import { CommissionComponent } from './view/admine/commission/commission.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        ScrollingModule
    ],
    declarations: [
        AppComponent,
        DashboardDemoComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        LearnComponent,
        ParcoursListComponent,
        ParcoursEditComponent,
        CoursListComponent,
        CoursEditComponent,
        SectionListComponent,
        SectionViewComponent,
        SectionEditComponent,
        ClassRoomListComponent,
        EtudiantssViewComponent,
        HomeComponent,
        QuizViewComponent,
        EtudiantCreateComponent,
        EtudiantEditComponent,
        EtudiantListComponent,
        InscriptionCreateComponent,
        InscriptionListComponent,
        InscriptionViewComponent,
        CategorieProfViewComponent,
        SectionsComponent,
        CoursesComponent,
        EdCoursesComponent,
        SalaryComponent,
        InscriptionEditComponent,
        EtudiantttViewComponent,
        EtudiantsComponent,
        EtudiantssViewComponent,
        EtudiantCreateComponent,
        EtudiantListComponent,
        EtudiantEditComponent,
        InscriptionsComponent,
        ProfclassesComponent,
        QuizPreviewComponent,
        QuizConfigComponent,
        ScheduleComponent,
        FaqAnswerComponent,
        NewsAdminListComponent,
        NewsAdminViewComponent,
        NewsAdminCreateComponent,
        NewsTeacherListComponent,
        NewsTeacherViewComponent,
        FaqListComponent,
        FaqContactComponent,
        ChooseViewComponent,
        SectionSimulateComponent,
        ParcoursCreateComponent,
        CoursCreateComponent,
        HomeTeacherComponent,
        TeacherRubComponent,
        ProfNewsComponent,
        NearestComponent,
        AjoutEtudiantComponent,
        RecommendComponent,
        RecommendationComponent,
        RecommendEditComponent,
        RecommendListComponent,
        RecommendViewComponent,
        QuizCreateComponent,
        QuizEtudiantViewComponent,
        SessionCoursEditComponent,
        SessionCoursCreateComponent,
        SessionCoursViewComponent,
        SessionCoursListComponent,
        SyntheseSessionComponent,
        SyntheseSessionCoursCreateComponent,
        SyntheseSessionCoursEditComponent,
        SyntheseSessionCoursListComponent,
        // ProfesseurComponent,
        ProfesseurListComponent,
        ProfesseurCreateComponent,
        ProfesseurEditComponent,
        EtudiantParcoursComponent,
        EtudiantCoursesComponent,
        ProfesseurViewComponent,
        StudentSimulateSectionComponent,
        SyntheseSessionHistoryComponent,
        RecommendAdminComponent,
        FaqCreateComponent,
        FaqStudentListComponent,
        FaqAdminListComponent,
        FaqContactListComponent,
        FaqStudentContactComponent,
        FaqStudentContactListeComponent,
        DictionaryCreateComponent,
        NewsEtudiantListComponent,
        NewsEtudiantViewComponent,
        NewsAdminEditComponent,
        NewsAdminDeleteComponent,
        PaiementComponent,
        PaiementListComponent,
        ScheduleAdminComponent,
        ScheduleStudentComponent,
        QuizUpdateComponent,
        SectionCreateComponent,
        SafePipe,
        SafePipe1,
        SafePipe2,
        ChatComponent,
        Chat1Component,
        SectionCreateComponent,
        QuizTakeComponent,
        SectionItemPreviewComponent,
        ImageItemComponent,
        SectionItemComponent,
        DictionaryEditComponent,
        ViewQuizEtudiantComponent,
        TranslateComponent,
        SyntheseSessionCoursListComponent,
        EtudiantReviewViewComponent,
        RecommendationTeacherComponent,
        VocabularySectionComponent,
        VocabularySectionItemComponent,
        AdminComponent,
        EtudiantComponent,
        ProfComponent,
        PublicComponent,
        VocabularySectionProfComponent,
        VocabularySectionItemProfComponent,
        SessionCoursEditComponent,
        ProfReviewViewComponent,
        SessionCoursCreateComponent,
        SessionCoursListComponent,
        SessionCoursViewComponent,
        QuizPreviewProfComponent,
        AgentComponent,
        TransactionEmissionComponent,
        TransactionServirComponent,
        TransactionExtournComponent,
        TransactionRestitutionComponent,
        TransactionHistoriqueComponent,
        ClientManagementComponent,
        LoginAgentComponent,
        LoginAdmineComponent,
        AdmineComponent,
        TransactionConsultationComponent,
        TransactionBloquageComponent,
        TransactionDebloquageComponent,
        TransactionNotificationComponent,
        PlafondConfigComponent,
        CommissionComponent,

    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
         MenuService, MessageService, ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

