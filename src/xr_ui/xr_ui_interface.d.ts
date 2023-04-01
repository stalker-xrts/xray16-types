declare module "xray16" {
  /**
   * @source C++ class CUIWindow
   * @customConstructor CUIWindow
   * @group xr_ui_interface
   */
  export class XR_CUIWindow extends XR_EngineBinding {
    public constructor();

    public IsShown(): boolean;
    public IsEnabled(): boolean;
    public IsAutoDelete(): boolean;
    public IsCursorOverWindow(): boolean;

    public GetFont(): XR_CGameFont;
    public GetHeight(): f32;
    public GetWidth(): f32;
    public GetWndPos(): XR_vector2;
    public GetAbsoluteRect(): XR_Frect;

    public SetFont(font: XR_CGameFont): void;
    public SetWndSize(vector2: XR_vector2): void;
    public SetWndSize(width: f32, height: f32): void;
    public SetWindowName(name: string): void;
    public SetWndPos(vector2: XR_vector2): void;
    public SetWndPos(x1: f32, y1: f32): void;
    public SetAutoDelete(auto_delete: boolean): void;
    public SetPPMode(): void;
    public SetHeight(height: f32): void;
    public SetWidth(width: f32): void;
    public SetWndRect(rect: XR_Frect): void;
    public SetWndRect(x1: f32, y1: f32, x2: f32, y2: f32): void;

    public FocusReceiveTime(): u32;
    public Init(frect: XR_Frect): void;
    public Init(x1: f32, y1: f32, x2: f32, y2: f32): void;
    public Enable(is_enabled: boolean): void;
    public AttachChild(child: XR_CUIWindow): void;
    public DetachChild(child: XR_CUIWindow): void;
    public WindowName(): string;
    public ResetPPMode(): void;
    public Show(show: boolean): void;
  }

  /**
   * @source C++ class CServerList : CUIWindow
   * @customConstructor CServerList
   * @group xr_ui_interface
   */
  export class XR_CServerList extends XR_CUIWindow {
    public static readonly ece_unique_nick_expired: 2;
    public static readonly ece_unique_nick_not_registred: 1;

    public SetPlayerName(name: string): void;
    public SetFilters(filters: XR_SServerFilters): void;
    public RefreshList(value: boolean): void;
    public SetSortFunc(a: string, b: boolean): void;
    public NetRadioChanged(value: boolean): void;
    public ShowServerInfo(): void;
    public RefreshQuick(): void;
    public ConnectToSelected(): void;
    public SetConnectionErrCb(cb: XR_connect_error_cb): void;
  }

  /**
   * @source C++ class CUIButton : CUIStatic
   * @customConstructor CUIButton
   * @group xr_ui_interface
   */
  export class XR_CUIButton extends XR_CUIStatic {}

  /**
   * @source C++ class CUI3tButton : CUIButton
   * @customConstructor CUI3tButton
   * @group xr_ui_interface
   */
  export class XR_CUI3tButton extends XR_CUIButton {}

  /**
   * @source C++ class CUICheckButton : CUI3tButton
   * @customConstructor CUICheckButton
   * @group xr_ui_interface
   */
  export class XR_CUICheckButton extends XR_CUI3tButton {
    public SetCheck(value: boolean): void;
    public GetCheck(): boolean;
    public SetDependControl(window: XR_CUIWindow): void;
  }

  /**
   * @source C++ class CUIComboBox : CUIWindow
   * @customConstructor CUIComboBox
   * @group xr_ui_interface
   */
  export class XR_CUIComboBox extends XR_CUIWindow {
    public enable_id(id: i32): void;
    public disable_id(id: i32): void;
    public ClearList(): void;
    public SetText(text: string): void;
    public AddItem(label: string, id: i32): void;
    public GetText(): string;
    public SetListLength(length: i32): void;
    public CurrentID(): i32;
    public GetTextOf(id: i32): string;
    public SetCurrentOptValue(): void;
    public SetVertScroll(enabled: boolean): void;
    public SetCurrentID(id: i32): void;
  }

  /**
   * @source C++ class CUICustomEdit : CUIWindow
   * @customConstructor CUICustomEdit
   * @group xr_ui_interface
   */
  export class XR_CUICustomEdit extends XR_CUIWindow {
    public GetText(): string;
    public SetText(text: string): void;
    public SetNextFocusCapturer(edit: XR_CUICustomEdit): void;
    public CaptureFocus(value: boolean): void;
  }

  /**
   * @source C++ class CUICustomSpin : CUIWindow
   * @customConstructor CUICustomSpin
   * @group xr_ui_interface
   */
  export class XR_CUICustomSpin extends XR_CUIWindow {
    public GetText(): string;
  }

  /**
   * @source C++ class CUIDialogWnd : CUIWindow
   * @customConstructor CUIDialogWnd
   * @group xr_ui_interface
   */

  export class XR_CUIDialogWnd extends XR_CUIWindow {
    public HideDialog(): void;
    public ShowDialog(show: boolean): void;
    public GetHolder(): XR_CDialogHolder;
    public SetHolder(holder: XR_CDialogHolder): void;
  }

  /**
   * @source C++ class CUIScriptWnd : CUIDialogWnd,DLL_Pure
   * @customConstructor CUIScriptWnd
   * @group xr_ui_interface
   */
  export class XR_CUIScriptWnd extends XR_CUIDialogWnd {
    public constructor();

    public OnKeyboard(key: TXR_DIK_key, event: TXR_ui_event): boolean;
    public Update(): void;
    public AddCallback(name: string, event: number, cb: () => void, source?: XR_CUIWindow): void;
    public Dispatch(command: number, parameter: number): boolean;
    public Register(window: XR_CUIWindow, name: string): void;
    public Load(value: string): boolean;
    public GetListWnd(id: string): XR_CUIListWnd | null;
    public GetDialogWnd(id: string): XR_CUIDialogWnd | null;
    public GetEditBox(id: string): XR_CUIEditBox | null;
    public GetListBox(id: string): XR_CUIListBox | null;
    public GetFrameLineWnd(id: string): XR_CUIFrameLineWnd | null;
    public GetTabControl(id: string): XR_CUITabControl | null;
    public GetProgressBar(id: string): XR_CUIProgressBar | null;
    public GetFrameWindow(id: string): XR_CUIFrameWindow | null;
    public GetStatic(id: string): XR_CUIStatic | null;
  }

  /**
   * @source C++ class CUIEditBox : CUICustomEdit
   * @customConstructor CUIEditBox
   * @group xr_ui_interface
   */
  export class XR_CUIEditBox extends XR_CUICustomEdit {
    public InitTexture(texture_id: string): void;
  }

  /**
   * @source C++ class CUIEditBoxEx : CUICustomEdit
   * @customConstructor CUIEditBoxEx
   * @group xr_ui_interface
   */
  export class XR_CUIEditBoxEx extends XR_CUICustomEdit {
    public InitTexture(texture_id: string): void;
  }

  /**
   * @source C++ class CUIFrameLineWnd : CUIWindow
   * @customConstructor CUIFrameLineWnd
   * @group xr_ui_interface
   */
  export class XR_CUIFrameLineWnd extends XR_CUIWindow {
    public SetColor(color: u32): void;
  }

  /**
   * @source C++ class CUIFrameWindow : CUIWindow
   * @customConstructor CUIFrameWindow
   * @group xr_ui_interface
   */
  export class XR_CUIFrameWindow extends XR_CUIWindow {
    public SetColor(color: u32): void;
  }

  /**
   * @source C++ class CUILines
   * @customConstructor CUILines
   * @group xr_ui_interface
   */
  export class XR_CUILines {
    public GetText(): string;
    public SetElipsis(value: boolean): void;
    public SetFont(value: XR_CGameFont): void;
    public SetText(text: string): void;
    public SetTextColor(color_code: u32): void;
    public SetTextST(text: string): void;
  }

  /**
   * @source C++ class CUIListBox : CUIScrollView
   * @customConstructor CUIListBox
   * @group xr_ui_interface
   */
  export class XR_CUIListBox<T extends XR_CUIListBoxItem = XR_CUIListBoxItem> extends XR_CUIScrollView {
    public GetSize(): u32;
    public GetItem(index: u32): XR_CUIWindow;
    public GetItemByIndex(index: i32): T;
    public GetSelectedIndex(): u32;
    public GetSelectedItem(): T | null;
    public GetItemHeight(): f32;

    public AddExistingItem(item: T): void;
    public AddTextItem(text: string): T;
    public RemoveItem(window: XR_CUIWindow): void;
    public RemoveAll(): void;
    public ShowSelectedItem(value: boolean): void;
    public SetItemHeight(height: f32): void;
    public SetSelectedIndex(index: u32): void;
  }

  /**
   * @source C++ class CUIListBoxItem : CUIFrameLineWnd
   * @customConstructor CUIListBoxItem
   * @group xr_ui_interface
   */
  export class XR_CUIListBoxItem extends XR_CUIFrameLineWnd {
    public constructor(height: f32);
    public constructor(target: XR_CUIListBoxItem);
    public constructor(target: XR_CUIListBoxItem, height: f32);

    public AddIconField(value: f32): XR_CUIStatic;
    public SetTextColor(color: u32): void;
    public AddTextField(text: string, width: f32): XR_CUITextWnd;
    public GetTextItem(): XR_CUITextWnd;
  }

  /**
   * @source C++ class CUIListBoxItemMsgChain : CUIListBoxItem
   * @customConstructor CUIListBoxItemMsgChain
   * @group xr_ui_interface
   */
  export class XR_CUIListBoxItemMsgChain extends XR_CUIListBoxItem {}

  /**
   * @source C++ class CUIMMShniaga : CUIWindow
   * @customConstructor CUIMMShniaga
   * @group xr_ui_interface
   */
  export class XR_CUIMMShniaga extends XR_CUIWindow {
    public static readonly epi_main: 0;
    public static readonly epi_new_game: 1;
    public static readonly epi_new_network_game: 2;

    public ShowPage(page_id: TXR_MMShniaga_page): void;
    public SetPage(page_id: TXR_MMShniaga_page, xml: string, selector: string): void;
    public SetVisibleMagnifier(visible: boolean): void;
  }

  /**
   * @group xr_ui_interface
   */
  export type TXR_MMShniaga_page = EnumeratedStaticsValues<typeof XR_CUIMMShniaga>;

  /**
   * @source C++ class CUIMapInfo : CUIWindow
   * @customConstructor CUIMapInfo
   * @group xr_ui_interface
   */
  export class XR_CUIMapInfo extends XR_CUIWindow {
    public InitMap(a: string, b: string): void;
  }

  /**
   * @source C++ class CUIMapList : CUIWindow
   * @customConstructor CUIMapList
   * @group xr_ui_interface
   */
  export class XR_CUIMapList extends XR_CUIWindow {
    public ClearList(): void;
    public GetCommandLine(value: string): string;
    public GetCurGameType(): TXR_GAME_TYPE;
    public IsEmpty(): boolean;
    public LoadMapList(): void;
    public OnModeChange(): void;
    public SaveMapList(): void;
    public SetMapInfo(info: XR_CUIMapInfo): void;
    public SetMapPic(picture: XR_CUIStatic): void;
    public SetModeSelector(modeSelector: XR_CUISpinText): void;
    public SetServerParams(params: string): void;
    public SetWeatherSelector(selector: XR_CUIComboBox): void;
    public StartDedicatedServer(): void;
  }

  /**
   * @source C++ class CUIMessageBox : CUIStatic
   * @customConstructor CUIMessageBox
   * @group xr_ui_interface
   */
  export class XR_CUIMessageBox extends XR_CUIStatic {
    public InitMessageBox(value: string): boolean;
    public GetPassword(): string;
    public GetHost(): string;
  }

  /**
   * @source C++ class CUIMessageBoxEx : CUIDialogWnd
   * @customConstructor CUIMessageBoxEx
   * @group xr_ui_interface
   */
  export class XR_CUIMessageBoxEx extends XR_CUIDialogWnd {
    public InitMessageBox(selector: string): void;
    public SetText(text: string): void;
    public GetPassword(): string;
    public GetHost(): string;
  }

  /**
   * @source C++ class CUIProgressBar : CUIWindow
   * @customConstructor CUIProgressBar
   * @group xr_ui_interface
   */
  export class XR_CUIProgressBar extends XR_CUIWindow {
    public GetRange_max(): f32;
    public GetRange_min(): f32;
    public SetProgressPos(value: f32): void;
    public GetProgressPos(): f32;
  }

  /**
   * @source C++ class CUIPropertiesBox : CUIFrameWindow
   * @customConstructor CUIPropertiesBox
   * @group xr_ui_interface
   */
  export class XR_CUIPropertiesBox extends XR_CUIFrameWindow {
    public AddItem(id: string): void;
    public AutoUpdateSize(): void;
    public RemoveItem(index: u32): void;
    public RemoveAll(): void;
    public Hide(): void;

    public Show(show: boolean): void;
    public Show(int1: i32, int2: i32): void;
  }

  /**
   * @source C++ class CUIVersionList : CUIWindow
   * @customConstructor CUIVersionList
   * @group xr_ui_interface
   */
  export class XR_CUIVersionList {
    public constructor();

    public GetItemsCount(): u64;
    public SwitchToSelectedVersion(): void;
    public GetCurrentVersionDescr(): string;
    public GetCurrentVersionName(): string;
  }

  /**
   * @source C++ class CUIScrollView : CUIWindow
   * @customConstructor CUIScrollView
   * @group xr_ui_interface
   */
  export class XR_CUIScrollView extends XR_CUIWindow {
    public SetScrollPos(position: i32): void;
    public RemoveWindow(window: XR_CUIWindow): void;
    public ScrollToBegin(): void;
    public GetCurrentScrollPos(): i32;
    public AddWindow(window: XR_CUIWindow, value: boolean): void;
    public GetMaxScrollPos(): i32;
    public GetMinScrollPos(): i32;
    public ScrollToEnd(): void;
    public Clear(): void;
    public SetFixedScrollBar(fixed: boolean): void;
  }

  /**
   * @source C++ class CUISleepStatic : CUIStatic
   * @customConstructor CUISleepStatic
   * @group xr_ui_interface
   */
  export class XR_CUISleepStatic extends XR_CUIStatic {}

  /**
   * @source C++ class CUISpinFlt : CUICustomSpin
   * @customConstructor CUISpinFlt
   * @group xr_ui_interface
   */
  export class XR_CUISpinFlt extends XR_CUICustomSpin {}

  /**
   * @source C++ class CUISpinNum : CUICustomSpin
   * @customConstructor CUISpinNum
   * @group xr_ui_interface
   */
  export class XR_CUISpinNum extends XR_CUICustomSpin {}

  /**
   * @source C++ class CUISpinText : CUICustomSpin
   * @customConstructor CUISpinText
   * @group xr_ui_interface
   */
  export class XR_CUISpinText extends XR_CUICustomSpin {}

  /**
   * @source C++ class CUIStatic : CUIWindow
   * @customConstructor CUIStatic
   * @group xr_ui_interface
   */
  export class XR_CUIStatic extends XR_CUIWindow {
    public GetColor(): u32;
    public TextControl(): XR_CUILines;
    public GetTextureRect(): XR_Frect;
    public GetStretchTexture(): boolean;
    public SetStretchTexture(stretch: boolean): void;
    public SetTextureRect(frect: XR_Frect): void;
    public InitTexture(texture: string): void;
    public SetTextColor(r: i32, g: i32, b: i32, a: i32): void;
    public SetHeading(number: f32): void;
    public SetTextST(string: string): void;
    public SetTextAlign(align: u32): void;
    public GetTextAlign(): u32;
    public GetText(): string;
    public InitTextureEx(first: string, second: string): void;
    public SetTextX(x: f32): void;
    public SetTextY(x: f32): void;
    public GetTextY(x: f32): void;
    public GetTextX(): f32;
    public SetTextureOffset(x: f32, y: f32): void;
    public SetColor(color: u32): void;
    public SetElipsis(a: i32, b: i32): void;
    public GetHeading(): f32;
    public SetText(text: string): void;
    public GetOriginalRect(): XR_Frect;
    public SetOriginalRect(frect: XR_Frect): void;
  }

  /**
   * @source C++ class CUITabButton : CUIButton
   * @customConstructor CUITabButton
   * @group xr_ui_interface
   */
  export class XR_CUITabButton extends XR_CUIButton {}

  /**
   * @source C++ class CUITabControl : CUIWindow
   * @customConstructor CUITabControl
   * @group xr_ui_interface
   */
  export class XR_CUITabControl extends XR_CUIWindow {
    public GetActiveId(): string;
    public SetActiveTab(id: string): void;
    public SetActiveTab(id: u32): void;
    public GetTabsCount(): u32;
    public GetButtonById(id: string): XR_CUITabButton;
    public RemoveAll(): void;
    public AddItem(item: XR_CUITabButton): void;
    public AddItem(id: string, name: string, top_left: XR_vector2, bot_right: XR_vector2): void;
    public RemoveItem(id: string): void;
    public GetButtonByIndex(index: u32): XR_CUITabButton;
    public SetNewActiveTab(index: u32): void;
    public GetActiveIndex(): i32;
  }

  /**
   * @source C++ class CUITextWnd : CUIWindow
   * @customConstructor CUITextWnd
   * @group xr_ui_interface
   */
  export class XR_CUITextWnd extends XR_CUIWindow {
    public SetTextOffset(x: f32, y: f32): void;
    public SetText(text: string): void;
    public SetTextAlignment(align: TXR_CGameFont_alignment): void;
    public SetTextComplexMode(complex: boolean): void;
    public GetText(): string;
    public GetTextColor(): u32;
    public SetTextColor(color: u32): void;
    public SetTextST(text: string): void;
    public AdjustHeightToText(): void;
    public AdjustWidthToText(): void;
    public SetEllipsis(value: boolean): void;
    public SetVTextAlignment(alignment: TXR_CGameFont_alignment): void;
  }

  /**
   * @source C++ class CUITrackBar : CUIWindow
   * @customConstructor CUITrackBar
   * @group xr_ui_interface
   */
  export class XR_CUITrackBar extends XR_CUIWindow {
    public SetCheck(value: boolean): void;
    public SetCurrentValue(): void;
    public SetCurrentValue(value: f32): void;
    public SetCurrentValue(value: i32): void;
    public GetCheck(): boolean;
    public GetIValue(): i32;
    public GetFValue(): f32;
    public SetOptIBounds(min: i32, max: i32): void;
    public SetOptFBounds(min: f32, max: f32): number;
  }

  /**
   * @source C++ class CDialogHolder
   * @customConstructor CDialogHolder
   * @group xr_ui_interface
   */
  export class XR_CDialogHolder {
    public RemoveDialogToRender(window: XR_CUIWindow): void;
    public AddDialogToRender(window: XR_CUIWindow): void;
    public TopInputReceiver(): XR_CUIDialogWnd;
    public MainInputReceiver(): XR_CUIDialogWnd;
    public start_stop_menu(window: XR_CUIWindow, value: boolean): void;
  }

  /**
   * @source C++ class CGameTask : SGameTaskObjective
   * @customConstructor CGameTask
   * @group xr_ui_interface
   */
  export class XR_CGameTask extends XR_SGameTaskObjective {
    public constructor();

    public get_id(): string;
    public set_priority(value: i32): void;
    public set_id(id: string): void;
    public get_priority(): u32;
  }

  /**
   * @source C++ class CPhraseScript
   * @customConstructor CPhraseScript
   * @group xr_ui_interface
   */
  export class XR_CPhraseScript {
    public AddAction(value: string): void;
    public AddDisableInfo(value: string): void;
    public AddDontHasInfo(value: string): void;
    public AddGiveInfo(value: string): void;
    public AddHasInfo(value: string): void;
    public AddPrecondition(value: string): void;
    public SetScriptText(value: string): void;
  }

  /**
   * @source C++ class CPhrase
   * @customConstructor CPhrase
   * @group xr_ui_interface
   */
  export class XR_CPhrase {
    public GetPhraseScript(): XR_CPhraseScript;
  }

  /**
   * @source C++ class CPhraseDialog
   * @customConstructor CPhraseDialog
   * @group xr_ui_interface
   */
  export class XR_CPhraseDialog {
    public AddPhrase(text: string, phrase_id: string, prev_phrase_id: string, goodwill_level: number): XR_CPhrase;
  }

  /**
   * @source C++ class StaticDrawableWrapper
   * @customConstructor StaticDrawableWrapper
   * @group xr_ui_interface
   */
  export class XR_StaticDrawableWrapper {
    public m_endTime: f32;

    private constructor();

    public Draw(): void;
    public Update(): void;

    public IsActual(): boolean;
    public SetText(text: string): void;

    public destroy(): void;
    public wnd(): XR_CUIStatic;
  }

  /**
   * @source C++ class CUIListWnd : CUIWindow
   * @customConstructor CUIListWnd
   * @group xr_ui_interface
   */
  export class XR_CUIListWnd extends XR_CUIWindow {
    public SetVertFlip(flip: boolean): void;
    public RemoveItem(index: i32): void;
    public ScrollToPos(position: i32): void;
    public ShowSelectedItem(show: boolean): void;
    public EnableScrollBar(enable: boolean): void;
    public GetItem(index: i32): XR_CUIListItem;
    public GetVertFlip(): boolean;
    public SetTextColor(color: i32): void;
    public GetSelectedItem(): i32;
    public ScrollToEnd(): void;
    public SetFocusedItem(index: i32): void;
    public ActivateList(flag: boolean): void;
    public GetSize(): i32;
    public IsScrollBarEnabled(): boolean;
    public ScrollToBegin(): void;
    public RemoveAll(): void;
    public AddItem(item: XR_CUIListItem): boolean;
    public SetItemHeight(height: f32): void;
    public GetItemPos(item: XR_CUIListItem): i32;
    public IsListActive(): boolean;
    public GetFocusedItem(): i32;
    public ResetFocusCapture(): void;
  }

  /**
   * @source C++ class CUIListItem : CUIButton
   * @customConstructor CUIListItem
   * @group xr_ui_interface
   */
  export class XR_CUIListItem extends XR_CUIButton {}

  /**
   * @source C++ class CUIListItemEx : CUIListItem
   * @customConstructor CUIListItemEx
   * @group xr_ui_interface
   */
  export class XR_CUIListItemEx extends XR_CUIListItem {
    public SetSelectionColor(color: u32): void;
  }

  /**
   * @source C++ class UIHint : CUIWindow
   * @customConstructor UIHint
   * @group xr_ui_interface
   */
  export class XR_UIHint extends XR_CUIWindow {
    public constructor();

    public GetHintText(): string;
    public SetHintText(hint: string): void;
  }
}
