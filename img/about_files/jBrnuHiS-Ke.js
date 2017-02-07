if (self.CavalryLogger) { CavalryLogger.start_js(["bV5OB"]); }

__d("VideoChainingCaller",[],(function a(b,c,d,e,f,g){f.exports={INTERNAL:"internal",WWW_FEED_PIVOTS:"www_feed_pivots",WWW_FEED_SNOWLIFT:"www_feed_snowlift",MISC_PHOTO_SET:"misc_photo_set",MOBILE:"mobile",SEARCH:"search",WWW_FEED_RHC:"www_feed_rhc",WWW_PERMALINK:"www_permalink",MY_VIDEO_CHANNELS_ENT_QUERY:"my_video_channels_ent_query",TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:"top_followed_video_channels_ent_query",BADGE:"badge",PAGINATION:"pagination",SUBTITLE:"subtitle",CHANNEL_VIEW_FROM_UNKNOWN:"channel_view_from_unknown",CHANNEL_VIEW_FROM_NEWSFEED:"channel_view_from_newsfeed",CHANNEL_VIEW_FROM_EXPLOREFEED:"channel_view_from_explorefeed",LIVE_INDEXER_FROM_EXPLOREFEED:"live_indexer_from_explorefeed",CHANNEL_VIEW_FROM_SEARCH:"channel_view_from_search",CHANNEL_VIEW_FROM_NEWSFEED_PIVOT:"channel_view_from_newsfeed_pivot",NEWSFEED_PIVOT_INLINE:"newsfeed_pivot_inline",CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:"channel_view_from_page_call_to_action",CHANNEL_VIEW_FROM_PAGE_TIMELINE:"channel_view_from_page_timeline",CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:"channel_view_from_page_timeline_featured",CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB:"channel_view_from_page_video_tab",CHANNEL_VIEW_FROM_USER_TIMELINE:"channel_view_from_user_timeline",CHANNEL_VIEW_FROM_USER_VIDEO_TAB:"channel_view_from_user_video_tab",CHANNEL_VIEW_FROM_GROUP_TIMELINE:"channel_view_from_group_timeline",CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB:"channel_view_from_group_video_tab",CHANNEL_VIEW_FROM_SAVED_STORY:"channel_view_from_saved_story",SAVED_STORY_INLINE:"saved_story_inline",CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:"channel_view_from_shared_with_you_story",SHARED_WITH_YOU_STORY_INLINE:"shared_with_you_story_inline",CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:"channel_view_from_latest_from_your_channels_story",LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:"latest_from_your_channels_story_inline",CHANNEL_VIEW_FROM_CHANNEL_PIVOT:"channel_view_from_channel_pivot",CHANNEL_PIVOT_INLINE:"channel_pivot_inine",CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:"channel_view_from_recommended_channel_story",RECOMMENDED_CHANNEL_STORY_INLINE:"recommended_channel_story_inline",CHANNEL_VIEW_FROM_VIDEO_HOME:"channel_view_from_video_home",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_CHANNEL_SEE_ALL:"video_home_channel_see_all",CHANNEL_VIEW_FROM_CASTING:"channel_view_from_casting",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME_FEED:"video_home_feed",FEED_SURVEY_SWIPE:"feed_survey_swipe",FEED_PIVOTS_INLINE:"feed_pivots_inline",CHANNEL_VIEW_FROM_FEED_PIVOTS:"channel_view_from_feed_pivots",VIDEO_SETS_CACHE_REFRESH:"video_sets_cache_refresh",VIDEO_SETS_CACHE_CHECK:"video_sets_cache_check",DUMMY_STORY_RECOMMENDED_VIDEOS:"dummy_story_recommended_videos",DUMMY_STORY_FRIENDS_ENJOYING:"dummy_story_friends_enjoying",LIVE_EVENT_VIDEO_SET:"live_event_video_set",LIVE_VIDEOS_SET:"live_videos_set",SINGLE_CREATOR_VIDEO_SET:"single_creator_video_set",FRT_TOOL:"frt_tool",DUMMY_STORY_FRIENDS_ENJOYING_NOW:"dummy_story_friends_enjoying_now",DUMMY_STORY_DUMMY_ACTION:"dummy_story_dummy_action",OCULUS_VIDEO:"oculus_video",TRENDING_DEMOGRAPHICS_LIVE:"trending_demographics_live",LIVE_MAP:"live_map",UNCONNECTED_LIVE_VIDEO:"unconnected_live_video",PROFILE_VIDEO_GALLERY:"profile_video_gallery",CHANNEL_VIEW_FROM_PLAYLIST:"channel_view_from_playlist",OCULUS_SOCIAL_HUB:"oculus_social_hub",AKIRA:"akira"};}),null);
__d('PopoverMenu.react',['cx','CSS','InlineBlock.react','Popover','PopoverMenu','React','ReactDOM','SubscriptionsHandler','joinClasses','areEqual','setImmediate'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$ReactPopoverMenu1=null,this.$ReactPopoverMenu6=function(){if(this.$ReactPopoverMenu1){this.$ReactPopoverMenu1.release();this.$ReactPopoverMenu1=null;}this.$ReactPopoverMenu7();this.$ReactPopoverMenu3.setMenu(this.$ReactPopoverMenu4(this.props.menu));this.$ReactPopoverMenu5();}.bind(this),this.$ReactPopoverMenu4=function(r){var s=r.props,t=new r.type(s);this.$ReactPopoverMenu1=new (c('SubscriptionsHandler'))();if(s.onItemClick)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('itemclick',s.onItemClick));if(s.onItemFocus)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('focus',s.onItemFocus));if(s.onItemBlur)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('blur',s.onItemBlur));if(s.onChange)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('change',s.onChange));if(this.props.onShow)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('show',this.props.onShow));if(this.props.onHide)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('hide',this.props.onHide));return t;}.bind(this),this.getMenu=function(){return this.$ReactPopoverMenu3.getMenu();}.bind(this),this.isShown=function(){return !!(this.$ReactPopoverMenu2&&this.$ReactPopoverMenu2.isShown());}.bind(this),this.showPopover=function(r){this.$ReactPopoverMenu2.showLayer();if(r){var s=this.$ReactPopoverMenu3.getMenu();s.blur();s.focusAnItem(r);}}.bind(this),this.hidePopover=function(){var r=this.$ReactPopoverMenu2;if(r&&r.isShown())r.hideLayer();}.bind(this),this.getFocusedItem=function(){var r=this.$ReactPopoverMenu3.getMenu();return r.getFocusedItem();}.bind(this),this.$ReactPopoverMenu7=function(){var r=this.getMenu();r&&r.forEachItem(function(s){var t=s.getRoot().firstElementChild;t&&c('ReactDOM').unmountComponentAtNode(t);});}.bind(this),n;}l.getFirstChild=function(m){'use strict';var n=m.children;return Array.isArray(n)?n[0]:n;};l.getButtonSize=function(m){'use strict';var n=l.getFirstChild(m);return n&&n.type.getButtonSize(n.props);};l.prototype.componentDidMount=function(){'use strict';var m=c('ReactDOM').findDOMNode(this.refs.root),n=m.firstChild;c('CSS').addClass(n,"_p");this.$ReactPopoverMenu2=new (c('Popover'))(m,n,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0},disableArrowKeyActivation:this.props.disableArrowKeyActivation,enableActivationOnEnter:this.props.enableActivationOnEnter,'data-testid':this.props['data-testid']});this.$ReactPopoverMenu3=new (c('PopoverMenu'))(this.$ReactPopoverMenu2,n,this.$ReactPopoverMenu4(this.props.menu),this.props.behaviors);this.$ReactPopoverMenu5();};l.prototype.componentDidUpdate=function(m){'use strict';if(!c('areEqual')(m.menu,this.props.menu))c('setImmediate')(this.$ReactPopoverMenu6);if(this.props.alignh!==m.alignh)this.$ReactPopoverMenu3.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==m.disabled)if(this.props.disabled){this.$ReactPopoverMenu3.disable();}else this.$ReactPopoverMenu3.enable();};l.prototype.$ReactPopoverMenu5=function(){'use strict';if(this.props.onReturnWithoutFocusedItem)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu3.subscribe('returnWithoutFocusedItem',this.props.onReturnWithoutFocusedItem));};l.prototype.render=function(){'use strict';var m=c('React').Children.map(this.props.children,function(o,p){if(p===0){return c('React').cloneElement(o,{className:c('joinClasses')(o.props.className,"_p")});}else return o;}),n=Object.assign({},this.props);delete n.onShow;delete n.onHide;delete n.alignh;delete n.position;delete n.layerBehaviors;delete n.behaviors;delete n.menu;delete n.disabled;delete n.disableArrowKeyActivation;delete n.enableActivationOnEnter;return c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},n,{className:c('joinClasses')(this.props.className,"uiPopover"),ref:'root',disabled:null}),m);};l.prototype.componentWillUnmount=function(){'use strict';this.hidePopover();if(this.$ReactPopoverMenu1){this.$ReactPopoverMenu1.release();this.$ReactPopoverMenu1=null;}this.$ReactPopoverMenu3&&this.$ReactPopoverMenu3.destroy();};l.propTypes={alignh:k.oneOf(['left','center','right']),alignv:k.oneOf(['baseline','bottom','middle','top']),position:k.oneOf(['above','below','left','right']),layerBehaviors:k.array,menu:k.object.isRequired,disabled:k.bool,disableArrowKeyActivation:k.bool,enableActivationOnEnter:k.bool,onReturnWithoutFocusedItem:k.func};l.defaultProps={alignv:'middle'};f.exports=l;}),null);
__d('MenuItemNoAction',['MenuItem'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('MenuItem'));i=h&&h.prototype;j.prototype.hasAction=function(){'use strict';return false;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('ReactMenu',['cx','Menu','MenuItem','MenuItemNoAction','MenuSelectableItem','MenuTheme','React','SelectableMenu','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l;function m(q){var r=[];c('React').Children.forEach(q,function(s){if(s)r.push(s);});return r;}function n(q){q.isReactLegacyFactory={};q.type=q;}i=babelHelpers.inherits(o,c('Menu'));j=i&&i.prototype;function o(q,r){'use strict';var s=babelHelpers['extends']({theme:c('MenuTheme'),maxheight:q?q.maxheight:null,className:q?q.className:null},r);j.constructor.call(this,m(q.children),s);}n(o);k=babelHelpers.inherits(p,c('SelectableMenu'));l=k&&k.prototype;function p(q,r){'use strict';var s=babelHelpers['extends']({className:c('joinClasses')("_57di",q?q.className:null),theme:c('MenuTheme'),multiple:q&&q.multiple,maxheight:q?q.maxheight:null},r);l.constructor.call(this,m(q.children),s);}n(p);o.SelectableMenu=p;n(c('MenuItem'));o.Item=c('MenuItem');o.ItemNoAction=c('MenuItemNoAction');n(c('MenuSelectableItem'));o.SelectableItem=c('MenuSelectableItem');f.exports=o;}),null);
__d('ReactXUIMenu',['ReactMenu','XUIMenuTheme','XUIMenuWithSquareCorner'],(function a(b,c,d,e,f,g){var h,i,j,k;function l(o){o.isReactLegacyFactory={};o.type=o;}h=babelHelpers.inherits(m,c('ReactMenu'));i=h&&h.prototype;function m(o){'use strict';var p={theme:c('XUIMenuTheme')};if(!o||o.withsquarecorner!==false)p.behaviors=[c('XUIMenuWithSquareCorner')];i.constructor.call(this,o,p);}l(m);j=babelHelpers.inherits(n,c('ReactMenu').SelectableMenu);k=j&&j.prototype;function n(o){'use strict';var p={theme:c('XUIMenuTheme')};if(!o||o.withsquarecorner!==false)p.behaviors=[c('XUIMenuWithSquareCorner')];k.constructor.call(this,o,p);}l(n);m.SelectableMenu=n;m.Item=c('ReactMenu').Item;m.SelectableItem=c('ReactMenu').SelectableItem;f.exports=m;}),null);
__d('UFIOrderingModeSelector.react',['cx','invariant','ix','Image.react','InlineBlock.react','Link.react','PopoverMenu.react','React','ReactXUIMenu'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('React').PropTypes,n=c('ReactXUIMenu').SelectableMenu,o=c('ReactXUIMenu').SelectableItem;k=babelHelpers.inherits(p,c('React').Component);l=k&&k.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.onMenuItemClick=function(v,w){this.props.onOrderChanged(w.item.getValue());}.bind(this),r;}p.prototype.render=function(){if(this.props.orderingModes.length===0)return null;var q=this.props.orderingModes.filter(function(s){return s.value==this.props.selectedMode;}.bind(this)).map(function(s){return s.name;}).pop();q||i(0);var r=c('React').createElement(n,{className:"_4tju",onItemClick:this.onMenuItemClick},this.props.orderingModes.map(function(s){return (c('React').createElement(o,{key:s.value,value:s.value,label:s.name,selected:s.value===this.props.selectedMode},c('React').createElement('div',{className:"_3scm"},c('React').createElement('div',{className:"_3scn"},s.name),c('React').createElement('div',{className:"_3sco"},s.description))));}.bind(this)));return (c('React').createElement('div',{className:"_3scp"},c('React').createElement(c('InlineBlock.react'),null,c('React').createElement(c('PopoverMenu.react'),{className:"_3scs",menu:r,alignh:'right'},c('React').createElement(c('Link.react'),null,q,c('React').createElement(c('Image.react'),{className:"_3sct",src:j('/images/ui/xhp/link/more/down_caret.gif')}))))));};p.propTypes={onOrderChanged:m.func.isRequired,orderingModes:m.arrayOf(m.shape({name:m.string.isRequired,description:m.string,value:m.string.isRequired})).isRequired,selectedMode:m.string.isRequired};f.exports=p;}),null);
__d('UFIOrderingModeSelectorContainer.react',['BanzaiLogger','Random','React','SubscriptionsHandler','UFIConfig','UFIInstanceAction','UFIOrderingModeSelector.react','UFIOrderingModeStore','UFISharedDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={selectedMode:c('UFIOrderingModeStore').getState().get(this.props.contextArgs.instanceid)},this.$UFIOrderingModeSelectorContainer1=null,this.onOrderChanged=function(q){var r=this.props.feedback;if(r.orderingmodes&&c('UFIConfig').logChangeOrderingModeUsageSampleRate>c('Random').random())c('BanzaiLogger').log('CommentsOrderingModeSelectorUsageLoggerConfig',{start_order:this.props.selectedMode,end_order:q,post_fbid:r.commentstargetfbid,post_owner_fbid:r.ownerid,available_orders:r.orderingmodes.map(function(s){return s.value;})});c('UFISharedDispatcher').dispatch(c('UFIInstanceAction').changeOrderingMode(this.props.contextArgs,q));}.bind(this),m;}k.prototype.componentDidMount=function(){this.$UFIOrderingModeSelectorContainer1=new (c('SubscriptionsHandler'))();this.$UFIOrderingModeSelectorContainer1.addSubscriptions(c('UFIOrderingModeStore').addListener(function(){if(!this.$UFIOrderingModeSelectorContainer1)return;this.setState({selectedMode:c('UFIOrderingModeStore').getState().get(this.props.contextArgs.instanceid)});}.bind(this)));};k.prototype.componentWillUnmount=function(){if(this.$UFIOrderingModeSelectorContainer1){this.$UFIOrderingModeSelectorContainer1.release();this.$UFIOrderingModeSelectorContainer1=null;}};k.prototype.shouldComponentUpdate=function(l,m){return this.state.selectedMode!==m.selectedMode;};k.prototype.render=function(){return (c('React').createElement(c('UFIOrderingModeSelector.react'),{onOrderChanged:this.onOrderChanged,orderingModes:this.props.feedback.orderingmodes,selectedMode:this.state.selectedMode}));};k.propTypes={feedback:j.shape({defaultcommentorderingmode:j.string.isRequired,orderingmodes:j.arrayOf(j.shape({name:j.string.isRequired,description:j.string.isRequired,selected:j.bool.isRequired,value:j.string.isRequired})).isRequired,commentstargetfbid:j.string.isRequired,ownerid:j.string.isRequired}).isRequired,contextArgs:j.object.isRequired};f.exports=k;}),null);
__d("DatePickerRestraints",[],(function a(b,c,d,e,f,g){var h={enforceDateIsEarlierThan:function i(j){return function(k){return k.getTime()<j.getTime();};},enforceDateIsNoEarlierThan:function i(j){return function(k){return k.getTime()>=j.getTime();};},enforceDateIsLaterThan:function i(j){return function(k){return k.getTime()>j.getTime();};},enforceDateIsNoLaterThan:function i(j){return function(k){return k.getTime()<=j.getTime();};},isValidDate:function i(j,k){var l=j instanceof Date&&!isNaN(j.getTime());if(l&&k)return k.every(function(m){return m(j);});return l;}};f.exports=h;}),null);
__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i={createSpec:function j(k){return {displayName:k.displayName,propTypes:{behaviors:h.object,className:h.string,modal:h.bool,autohide:h.number,width:h.number,titleID:h.string,causalElement:h.object,causalElementRef:h.func,shown:h.bool,layerHideOnBlur:h.bool,hideOnEscape:h.bool,onToggle:h.func,fixedTopPosition:h.number},createLayer:function l(m){var n=this.props.className,o=babelHelpers['extends']({width:this.props.width,xui:true,autohide:this.props.autohide,classNames:n?n.split(' '):null,titleID:this.props.titleID,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},k||{}),p=babelHelpers['extends']({},k.addedBehaviors,this.props.behaviors);if(this.props.layerHideOnBlur!==false)p.LayerHideOnBlur=c('LayerHideOnBlur');if(this.props.hideOnEscape===true)p.LayerHideOnEscape=c('LayerHideOnEscape');o.addedBehaviors=this.enumerateBehaviors(p);var q=new (c('DialogX'))(o,m);q.conditionShow(this.props.shown);return q;},receiveProps:function l(m,n){this.updateBehaviors(n.behaviors,m.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(m.shown);this.layer.setWidth(m.width);m.shown&&this.layer.updatePosition();}},_getCausalElement:function l(){var m;if(this.props.causalElementRef){m=c('ReactDOM').findDOMNode(this.props.causalElementRef());}else m=this.props.causalElement;return m;}};}};f.exports=i;}),null);
__d('MenuSeparator.react',['MenuSeparator'],(function a(b,c,d,e,f,g){function h(j){j.isReactLegacyFactory={};j.type=j;}var i=c('MenuSeparator');h(i);f.exports=i;}),null);
__d('PopoverMenuContextMinWidth',['cx','CSS','Style','shield'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null;}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null;}};i.prototype._onSetMenu=function(){'use strict';this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateWidth,this));var j=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateWidth();};i.prototype._updateWidth=function(){'use strict';var j=this._menu.getRoot(),k=this._popoverMenu.getTriggerElem(),l=k.offsetWidth;c('Style').set(j,'min-width',l+'px');c('CSS').conditionClass(j,"_575s",l>=j.offsetWidth);};Object.assign(i.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;}),null);
__d('PopoverMenuOverlappingBorder',['cx','CSS','DOM','Style','shield'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();this._triggerElem=j.getTriggerElem();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeBorderSubscriptions();this._removeShortBorder();};i.prototype._onSetMenu=function(){'use strict';this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateBorder,this));var j=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateBorder();};i.prototype._updateBorder=function(){'use strict';var j=this._menu.getRoot(),k=this._triggerElem.offsetWidth,l=Math.max(j.offsetWidth-k,0);c('Style').set(this._shortBorder,'width',l+'px');};i.prototype._renderShortBorder=function(j){'use strict';this._shortBorder=c('DOM').create('div',{className:"_54hx"});c('DOM').appendContent(j,this._shortBorder);c('CSS').addClass(j,"_54hy");};i.prototype._removeShortBorder=function(){'use strict';if(this._shortBorder){c('DOM').remove(this._shortBorder);this._shortBorder=null;c('CSS').removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy");}};i.prototype._removeBorderSubscriptions=function(){'use strict';if(this._showSubscription){this._popover.unsubscribe(this._showSubscription);this._showSubscription=null;}if(this._menuSubscription){this._menu.unsubscribe(this._menuSubscription);this._menuSubscription=null;}};Object.assign(i.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;}),null);
__d('ReactSelectorUtils',['React'],(function a(b,c,d,e,f,g){'use strict';var h={processMenuItems:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2],m=void 0,n=c('React').Children.map(j,function(o){if(o){var p=o.props.value===k;o=c('React').cloneElement(o,{selected:p});if(p)m=o;return o;}});return {items:n,selectedItem:m};},processMultiMenuItems:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2],m=[],n=j;if(k)n=c('React').Children.map(j,function(o){if(o){var p=k.some(function(q){return q===o.props.value;});o=c('React').cloneElement(o,{selected:p});if(p)m.push(o);return o;}});return {items:n,selectedItems:m};}};f.exports=h;}),null);
__d('AbstractSelector.react',['cx','invariant','ContextualLayerAutoFlip','InlineBlock.react','PopoverMenu.react','PopoverMenuContextMinWidth','PopoverMenuOverlappingBorder','React','ReactSelectorUtils','intlList','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j=c('React').PropTypes;function k(m,n,o){if(m[n]==null)return;var p=Array.isArray(m[n]);if(m.multiple){if(!p)return new Error('You are trying to set a single value for `'+n+'` '+'but the menu has `multiple` set to true, so it should be an '+'array of values.');}else if(p)return new Error('You are trying to set an array of values for `'+n+'` '+'but the menu has `multiple` set to false, so it should be a '+'single value.');}var l=c('React').createClass({displayName:'AbstractSelector',propTypes:{config:j.object.isRequired,alignh:j.oneOf(['left','center','right']),name:j.string,overlappingborder:j.bool,onChange:j.func,disabled:j.bool,maxheight:j.number,multiple:j.bool,defaultLabel:j.string,defaultValue:k,value:k,initialValue:k,onReturnWithoutFocusedItem:j.func},getInitialState:function m(){return {value:this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue};},setMenuValue:function m(n){this.refs&&this.refs.popover||i(0);this._internalChange=true;this.refs.popover.getMenu().setValue(n);this._internalChange=false;},onChange:function m(n,o){if(this._internalChange)return;if(this.props.value==null){var p=null;if(this.props.multiple){p=o.map(function(q){return q.value;});}else p=o.value;this.setState({value:p});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(o);},componentWillReceiveProps:function m(n){if(n.value!=null){this.setState({value:n.value});}else if(this.props.multiple!==n.multiple)this.setState({value:n.multiple?[this.state.value]:this.state.value[0]});},render:function m(){var n=this.props.config,o=!this.props.multiple?c('ReactSelectorUtils').processMenuItems(this.props.children,this.state.value):c('ReactSelectorUtils').processMultiMenuItems(this.props.children,this.state.value),p=c('React').cloneElement(n.menu,{children:o.items,className:c('joinClasses')("_575t",n.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),q='',r=null;if(!this.props.multiple){var s=o.selectedItem;q=s.props.label||s.props.children;if(s.props.icon)r=c('React').cloneElement(s.props.icon,{});}else{var t=o.selectedItems;if(!t.length){q=this.props.defaultLabel;}else q=c('intlList')(t.map(function(ba){return ba.props.children;}),c('intlList').CONJUNCTIONS.NONE);}var u={label:q,disabled:this.props.disabled};if(r)u.image=r;var v=c('React').cloneElement(n.button,u),w=[c('ContextualLayerAutoFlip')];if(n.layerBehaviors)w=w.concat(n.layerBehaviors);var x=[c('PopoverMenuContextMinWidth')];if(this.props.overlappingborder)x.push(c('PopoverMenuOverlappingBorder'));var y=null;if(this.props.multiple){var z=this.props.name+'[]',aa;if(this.state.value)aa=this.state.value.map(function(ba){return (c('React').createElement('input',{key:ba,type:'hidden',name:z,value:ba}));});y=c('React').createElement('div',null,aa);}else y=c('React').createElement('input',{type:'hidden',name:this.props.name,value:this.state.value});return (c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},this.props,{alignv:'middle',name:null}),c('React').createElement(c('PopoverMenu.react'),{alignh:this.props.alignh,behaviors:x,disabled:this.props.disabled,layerBehaviors:w,menu:p,position:this.props.position,onReturnWithoutFocusedItem:this.props.onReturnWithoutFocusedItem,ref:'popover'},v),y));},showMenu:function m(){this.isMounted()||i(0);this.refs.popover.showPopover();},showAndFocusMenu:function m(){this.isMounted()||i(0);this.refs.popover.showPopover(true);},hideMenu:function m(){this.isMounted()||i(0);this.refs.popover.hidePopover();}});f.exports=l;}),null);
__d('XUIDialogCancelButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'cancel',label:h._("Anuluj")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUIDialogConfirmButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'confirm',label:h._("Potwierd\u017a")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUIDialogOkayButton.react',['cx','fbt','React','XUIDialogButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_2z1w"),action:this.props.action,label:i._("OK")})));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={action:l.oneOf(['confirm','cancel','button']).isRequired};f.exports=m;}),null);
__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],(function a(b,c,d,e,f,g){var h=c('ReactLayer').createClass(c('AbstractDialog.react').createSpec({displayName:'XUIDialog',addedBehaviors:{LayerFadeOnShow:c('LayerFadeOnShow')}}));f.exports=h;}),null);
__d('XUIDialogBody.react',['cx','React','joinClasses','XUIText.react'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m="_4-i2"+(!this.props.useCustomPadding?' '+"_pig":'');return (c('React').createElement(c('XUIText.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,m),display:'block',size:this.props.fontSize}),this.props.children));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),useCustomPadding:k.bool};l.defaultProps={fontSize:'medium'};f.exports=l;}),null);
__d('XUIDialogFooter.react',['cx','LeftRight.react','React','XUIOverlayFooter.react','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m="_5a8u"+(this.props.fullBleedBorder?' '+"_27qq":'');return (c('React').createElement(c('XUIOverlayFooter.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,m)}),c('React').createElement(c('XUIText.react'),{display:'block',fontSize:this.props.fontSize},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',null,this.props.leftContent),c('React').createElement('div',null,this.props.children)))));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),fullBleedBorder:k.bool,leftContent:k.object};l.defaultProps={fontSize:'medium'};f.exports=l;}),null);
__d('XUISelectorButton.react',['invariant','React','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';!this.props.theme||h(0);return (c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({},this.props,{theme:'dark'})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUISelector.react',['invariant','AbstractSelector.react','ContextualLayerPositionClassOnContext','React','ReactXUIMenu','XUISelectorButton.react'],(function a(b,c,d,e,f,g,h){var i=c('ReactXUIMenu').SelectableMenu,j=c('ReactXUIMenu').SelectableItem,k=c('React').PropTypes,l=c('React').createClass({displayName:'ReactXUISelector',propTypes:{layerBehaviors:k.array,maxheight:k.number,multiple:k.bool,position:k.oneOf(['above','below','left','right']),disabled:k.bool,haschevron:k.bool,maxwidth:k.number,size:k.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:k.bool,use:k.oneOf(['default','special','confirm'])},statics:{getButtonSize:function m(n){return n.size||'medium';}},getDefaultProps:function m(){return {haschevron:true,layerBehaviors:[],multiple:false};},render:function m(){var n,o=[];c('React').Children.forEach(this.props.children,function(q){if(q)o.push(q);});if(o[0]&&o[0].type===c('XUISelectorButton.react')){n=o[0];o=o.slice(1);}else n=c('React').createElement(c('XUISelectorButton.react'),{ref:'button',haschevron:this.props.haschevron,disabled:this.props.disabled,use:this.props.use,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth});var p={button:n,menu:c('React').createElement(i,{maxheight:this.props.maxheight,multiple:this.props.multiple}),layerBehaviors:this.props.layerBehaviors.concat([c('ContextualLayerPositionClassOnContext')])};return (c('React').createElement(c('AbstractSelector.react'),babelHelpers['extends']({},this.props,{ref:'abstractSelector',config:p}),o));},showMenu:function m(){this.isMounted()||h(0);this.refs.abstractSelector.showMenu();},showAndFocusMenu:function m(){this.isMounted()||h(0);this.refs.abstractSelector.showAndFocusMenu();},hideMenu:function m(){this.isMounted()||h(0);this.refs.abstractSelector.hideMenu();}});l.Option=j;f.exports=l;}),null);
__d('LayerAutoFocusReact',['focusWithinLayer'],(function a(b,c,d,e,f,g){'use strict';function h(i){this._layer=i;this._subscription=null;}h.prototype.enable=function(){if(this._layer.containsReactComponent)this._subscription=this._layer.subscribe('reactshow',this._focus.bind(this));};h.prototype.disable=function(){if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._focus=function(){var i=this._layer.getRoot();i&&c('focusWithinLayer')(i);};f.exports=h;}),null);
__d('List.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props.border,n=this.props.direction,o=this.props.spacing,p=n==='horizontal'&&this.props.valign,q,r,s;q=(n==='vertical'?"_4kg":'')+(n==='horizontal'?' '+"_4ki":'')+(p==='top'?' '+"_509-":'')+(p==='middle'?' '+"_509_":'')+(p==='bottom'?' '+"_50a0":'');if(o!=='none'||m!=='none')r=(m==='none'?"_6-i":'')+(m==='light'?' '+"_4ks":'')+(m==='medium'?' '+"_4kt":'')+(m==='dark'?' '+"_4ku":'');if(o!=='none')s=(!this.props.edgepadding?"_6-h":'')+(o==='small'?' '+"_704":'')+(o==='medium'?' '+"_6-j":'')+(o==='large'?' '+"_703":'');var t=c('joinClasses')("uiList",q,r,s),u=Object.assign({},this.props);delete u.border;delete u.spacing;delete u.direction;delete u.valign;delete u.edgepadding;return (c('React').createElement('ul',babelHelpers['extends']({},u,{className:c('joinClasses')(this.props.className,t)}),this.props.children));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={border:k.oneOf(['none','light','medium','dark']),spacing:k.oneOf(['none','small','medium','large']),direction:k.oneOf(['vertical','horizontal']),valign:k.oneOf(['baseline','top','middle','bottom']),edgepadding:k.bool};l.defaultProps={border:'medium',spacing:'medium',direction:'vertical',valign:'top'};f.exports=l;}),null);