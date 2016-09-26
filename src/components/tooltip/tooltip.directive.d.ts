import { EventEmitter, ViewContainerRef, ComponentRef, ElementRef, Renderer } from '@angular/core';
import { InjectionService } from '../../utils';
import { PlacementTypes } from './placement.type';
import { StyleTypes } from './style.type';
import { AlignmentTypes } from './alignment.type';
import { ShowTypes } from './show.type';
import { TooltipContentComponent } from './tooltip.component';
import { TooltipService } from './tooltip.service';
export declare class TooltipDirective {
    private tooltipService;
    private viewContainerRef;
    private injectionService;
    private elementRef;
    private renderer;
    tooltipCssClass: string;
    tooltipTitle: string;
    tooltipAppendToBody: boolean;
    tooltipSpacing: number;
    tooltipDisabled: boolean;
    tooltipShowCaret: boolean;
    tooltipPlacement: PlacementTypes;
    tooltipAlignment: AlignmentTypes;
    tooltipType: StyleTypes;
    tooltipCloseOnClickOutside: boolean;
    tooltipCloseOnMouseLeave: boolean;
    tooltipHideTimeout: number;
    tooltipShowTimeout: number;
    tooltipTemplate: any;
    tooltipShowEvent: ShowTypes;
    tooltipContext: any;
    onShow: EventEmitter<{}>;
    onHide: EventEmitter<{}>;
    private componentId;
    private timeout;
    private mouseLeaveEvent;
    private focusOutEvent;
    private mouseLeaveContentEvent;
    private mouseEnterContentEvent;
    private documentClickEvent;
    constructor(tooltipService: TooltipService, viewContainerRef: ViewContainerRef, injectionService: InjectionService, elementRef: ElementRef, renderer: Renderer);
    ngOnDestroy(): void;
    onFocus(): void;
    onMouseEnter(): void;
    show(immediate?: boolean): void;
    addHideListeners(tooltip: any): void;
    injectComponent(): ComponentRef<TooltipContentComponent>;
    hide(immediate?: boolean): void;
    private createBoundOptions();
}
