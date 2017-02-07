if (self.CavalryLogger) { CavalryLogger.start_js(["utEYd"]); }

__d('NotificationHiddenState',['NotificationUpdates','NotificationConstants','isEmpty'],(function a(b,c,d,e,f,g){var h={};c('NotificationUpdates').subscribe('update-notifications',function(j,k){var l=k.nodes,m=k.payloadsource;if(m===c('NotificationConstants').PayloadSourceType.LIVE_SEND&&l&&l.length){var n={};l.forEach(function(o){var p=o.alert_id;if(h[p])n[p]=false;});if(!c('isEmpty')(n)){h=Object.assign(h,n);c('NotificationUpdates').didUpdateHiddenState(Object.keys(n));}}});c('NotificationUpdates').subscribe('update-hidden',function(j,k){if(k.hiddenState){h=Object.assign(h,k.hiddenState);c('NotificationUpdates').didUpdateHiddenState(Object.keys(k.hiddenState));}});var i={isHidden:function j(k){if(h[k])return h[k];return false;}};f.exports=i;}),null);
__d('NotificationVPVs',['getElementRect','MarauderLogger','Set'],(function a(b,c,d,e,f,g){'use strict';var h=new (c('Set'))();function i(o){if(j(o))return;c('MarauderLogger').log('notifications_vpv',undefined,null,'notification',o);h.add(o);}function j(o){return h.has(o);}function k(){h.clear();}function l(o,p){if(!o||!p)return false;return !(o.bottom<p.top||o.top>p.bottom||o.right<p.left||o.left>p.right);}function m(o){var p=c('getElementRect')(o);if(!p||p.top==0&&p.bottom==0&&p.left==0&&p.right==0)return null;return p;}var n={logImpression:i,clearImpressions:k,hasLoggedImpression:j,getValidatedRectangle:m,areRectsOverlapping:l};f.exports=n;}),null);
__d('NotificationList.react',['NotificationConstants','NotificationHiddenState','NotificationSeenState','NotificationStore','NotificationUpdates','NotificationUserActions','NotificationVPVs','FunnelLogger','NotificationJewelFunnelLoggingConstants','React','getObjectValues','isEmpty','mapObject'],(function a(b,c,d,e,f,g){var h,i,j=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_NAME,k=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_EVENT,l=c('React').PropTypes,m=c('NotificationConstants').PayloadSourceType.LIVE_SEND;h=babelHelpers.inherits(n,c('React').Component);i=h&&h.prototype;function n(o){'use strict';i.constructor.call(this,o);this.$NotificationList7=function(){var p={};Object.keys(this.$NotificationList2).forEach(function(q){var r=c('NotificationHiddenState').isHidden(q);if(r!=this.state.hiddenState[q])p[q]=r;}.bind(this));if(!c('isEmpty')(p))this.setState({hiddenState:babelHelpers['extends']({},this.state.hiddenState,p)});this.$NotificationList2={};this.$NotificationList5(c('NotificationStore').getCount(this.props.endpoint));}.bind(this);this.$NotificationList9=function(p,q,r){if(this.$NotificationList1||!this.state.canFetchMore)return;if(p){c('FunnelLogger').appendAction(j,k.FETCH_NEXT_SET);this.$NotificationList8();}this.$NotificationList10(q,r);}.bind(this);this.$NotificationList11=function(){this.setState({showingChevron:true});}.bind(this);this.$NotificationList12=function(){this.setState({showingChevron:false});}.bind(this);this.$NotificationList15=function(p){if(this.props.paused&&this.props.filter==='unread')this.setState({reading:p});}.bind(this);this.$NotificationList1=false;this.$NotificationList2={};this.$NotificationList3=false;this.state={canFetchMore:true,notifs:{},hiddenState:{},readState:{},showingChevron:false,reading:null};}n.prototype.componentWillMount=function(){'use strict';c('NotificationStore').registerEndpoint(this.props.endpoint);c('NotificationStore').setBusinessID(this.props.businessID);c('FunnelLogger').appendAction(j,k.FETCH_NOTIFICATIONS);this.$NotificationList4=[c('NotificationUpdates').subscribe('notifications-updated',function(o,p){if(p.source==m&&!c('isEmpty')(p.updates)){this.$NotificationList3=true;if(this.props.paused!==false)this.$NotificationList2=babelHelpers['extends']({},this.$NotificationList2,p.updates);return;}this.$NotificationList5(c('NotificationStore').getCount(this.props.endpoint));}.bind(this)),c('NotificationUpdates').subscribe(['hidden-state-updated','read-state-updated'],function(o,p){if(o=='hidden-state-updated'){if(p.source!==m||!this.props.paused){var q=c('mapObject')(p.updates,function(s,t){return c('NotificationHiddenState').isHidden(t);});this.setState({hiddenState:babelHelpers['extends']({},this.state.hiddenState,q)});}}else{var r=c('mapObject')(p.updates,function(s,t){return c('NotificationSeenState').isRead(t);});this.setState({readState:babelHelpers['extends']({},this.state.readState,r)});}}.bind(this))];};n.prototype.componentWillUnmount=function(){'use strict';if(this.$NotificationList4){while(this.$NotificationList4.length)this.$NotificationList4.pop().unsubscribe();this.$NotificationList4=null;}};n.prototype.componentWillReceiveProps=function(o){'use strict';var p=o.filter!==this.props.filter;if(p||!o.paused)this.setState({reading:null});};n.prototype.$NotificationList6=function(o){'use strict';var p=Object.keys(this.state.notifs),q=Object.keys(o).filter(function(s){return !this.state.notifs[s];}.bind(this));p=p.concat(q);var r={};p.forEach(function(s){if(this.$NotificationList2[s]){if(this.state.notifs[s])r[s]=this.state.notifs[s];}else r[s]=o[s];}.bind(this));return r;};n.prototype.$NotificationList5=function(o){'use strict';var p=this.props,q=p.endpoint,r=p.filter;this.$NotificationList1=true;c('NotificationStore').getNotifications(o,function(s){var t=c('isEmpty')(this.$NotificationList2)?s:this.$NotificationList6(s),u={},v={};c('getObjectValues')(t).forEach(function(w){var x=w.alert_id;u[x]=c('NotificationSeenState').isRead(x);v[x]=c('NotificationHiddenState').isHidden(x);});this.$NotificationList1=false;this.setState({notifs:t,canFetchMore:c('NotificationStore').canFetchMore(q,r)||c('NotificationStore').getCount(q)!==Object.keys(t).length,readState:babelHelpers['extends']({},this.state.readState,u),hiddenState:babelHelpers['extends']({},this.state.hiddenState,v)});}.bind(this),q,r);};n.prototype.$NotificationList8=function(){'use strict';if(!this.$NotificationList1){var o=Object.keys(this.state.notifs).length;this.$NotificationList5(o+this.props.numPerPage);}};n.prototype.$NotificationList10=function(o,p){'use strict';if(!o||!p)return;for(var q=0,r=o.children.length;q<r;q++){var s=o.children[q];if(s){var t=s.getAttribute('data-alert-id');if(t&&!c('NotificationVPVs').hasLoggedImpression(t)){var u=c('NotificationVPVs').getValidatedRectangle(s);if(c('NotificationVPVs').areRectsOverlapping(p,u))c('NotificationVPVs').logImpression(t);}}}};n.prototype.$NotificationList13=function(o){'use strict';if(o.length>this.props.numPerPage){this.$NotificationList5(o.length);}else this.$NotificationList8();return;};n.prototype.$NotificationList14=function(o){'use strict';var p=c('NotificationSeenState').getUnseenIDs();if(!c('isEmpty')(this.$NotificationList2))p=p.filter(function(q){return !this.$NotificationList2[q];}.bind(this));if(p.length&&this.props.paused)c('NotificationUserActions').markNotificationsAsSeen(p);if(this.props.hasEverBeenOpened)if(!o||!o.hasEverBeenOpened)this.$NotificationList13(p);};n.prototype.componentDidUpdate=function(o){'use strict';this.$NotificationList14(o);if(o.paused&&!this.props.paused){this.$NotificationList3=false;setTimeout(this.$NotificationList7,0);return;}if(this.props.paused&&o.filter!=this.props.filter){setTimeout(this.$NotificationList7,0);return;}};n.prototype.componentDidMount=function(){'use strict';this.$NotificationList14();};n.prototype.render=function(){'use strict';var o=this.props.listRenderer,p=this.props.filter,q=this.state,r=q.notifs,s=q.readState,t=q.reading,u={};if(this.props.filter==null){u=r;}else Object.values(r).forEach(function(v){var w=v.alert_id,x=s[w];if(p==='unread')x=!x||t===w;if(x)u[w]=v;});return (c('React').createElement(o,{paused:this.props.paused,tracking:this.props.tracking,negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,businessID:this.props.businessID,maxHeight:this.props.maxHeight,useChevron:this.props.useChevron,chevronType:this.props.chevronType,notifs:u,afterScroll:this.$NotificationList9,onChevronShow:this.$NotificationList11,onChevronHide:this.$NotificationList12,canFetchMore:this.state.canFetchMore,hiddenState:this.state.hiddenState,readState:this.state.readState,showingChevron:this.state.showingChevron,shouldScroll:this.$NotificationList3,upsell:this.props.upsell||null,isRHC:this.props.isRHC,onRead:this.$NotificationList15}));};n.propTypes={businessID:l.string,hasEverBeenOpened:l.bool,maxHeight:l.number,negativeTracking:l.object,paused:l.bool,tracking:l.string,useChevron:l.bool,chevronType:l.string,numPerPage:l.number.isRequired,listRenderer:l.func.isRequired,upsell:l.object,endpoint:l.string,filter:l.string};f.exports=n;}),null);
__d('ReadToggle.react',['cx','Event','Keys','React','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$ReadToggle2=function(event){if(c('Event').getKeyCode(event)===c('Keys').RETURN)this.props.onClick();}.bind(this),n;}l.prototype.render=function(){if(this.props.isRead){return c('React').createElement('div',{'aria-label':this.props.readLabel,className:this.$ReadToggle1(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.readLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle2,role:'button',tabIndex:0});}else return c('React').createElement('div',{'aria-label':this.props.unreadLabel,className:this.$ReadToggle1(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.unreadLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle2,role:'button',tabIndex:'0'});};l.prototype.$ReadToggle1=function(){return c('joinClasses')(this.props.className,(!this.props.isRead?"_5c9q":'')+(this.props.isRead?' '+"_5c9_":''));};l.propTypes={isRead:k.bool.isRequired,onClick:k.func,readLabel:k.node,unreadLabel:k.node};l.defaultProps={onClick:c('emptyFunction')};f.exports=l;}),null);
__d('VaultBoxURI',['URI'],(function a(b,c,d,e,f,g){var h={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function i(j){var k=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k)&&j.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function i(j){var k=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k);},getSyncedTabURI:function i(){return new (c('URI'))('/me/'+h.PHOTOS_SYNCED).getQualifiedURI();}};f.exports=h;}),null);
__d('FlexibleBlock.react',['cx','invariant','LeftRight.react','React','keyMirror'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('keyMirror')({left:true,right:true});function m(o){o.flex&&o.flex in n.FLEX||i(0);o.children&&o.children.length===2||i(0);}j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;n.prototype.render=function(){'use strict';m(this.props);var o,p=this.props.children[0],q=this.props.children[1],r=this.props.flex==l.left,s;if(r){s=p;o=c('LeftRight.react').DIRECTION.right;}else{s=q;o=c('LeftRight.react').DIRECTION.left;}var t=c('React').createElement('div',{className:"_42ef"},s);return (c('React').createElement(c('LeftRight.react'),babelHelpers['extends']({},this.props,{direction:o}),r?t:this.props.children[0],r?this.props.children[1]:t));};function n(){'use strict';j.apply(this,arguments);}n.FLEX=l;f.exports=n;}),null);