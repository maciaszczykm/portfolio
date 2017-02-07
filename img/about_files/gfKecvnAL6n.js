if (self.CavalryLogger) { CavalryLogger.start_js(["nvROe"]); }

__d('UFIFeedbackContext.react',['React','UFICentralUpdates','UFIFeedbackTargets'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$UFIFeedbackContext1=null,this.state={contextArgs:this.props.contextArgs,feedback:null},m;}k.prototype.loadFeedbackTarget=function(l){if(!this.$UFIFeedbackContext1)this.$UFIFeedbackContext1=c('UFIFeedbackTargets').getFeedbackTarget(l,function(m){this.$UFIFeedbackContext1=null;this.setState({feedback:m});}.bind(this));};k.prototype.componentDidMount=function(){this.loadFeedbackTarget(this.state.contextArgs.ftentidentifier);this.ufiCentralUpdatesSubscriptions=[c('UFICentralUpdates').subscribe('feedback-updated',function(l,m){var n=this.state.contextArgs;if(n.ftentidentifier in m.updates)this.loadFeedbackTarget(n.ftentidentifier);}.bind(this))];};k.prototype.componentWillUnmount=function(){this.ufiCentralUpdatesSubscriptions.forEach(function(l){return l&&c('UFICentralUpdates').unsubscribe(l);});if(this.$UFIFeedbackContext1)c('UFIFeedbackTargets').unsubscribe(this.$UFIFeedbackContext1);};k.prototype.render=function(){if(this.state.feedback)return this.props.render(this.state.contextArgs,this.state.feedback);return null;};k.propTypes={contextArgs:j.object.isRequired,render:j.func.isRequired};k.contextTypes={stores:j.object};f.exports=k;}),null);
__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIAddComment.react','UFIAddCommentActionType','UFICallbackStore','UFICommentEditIDStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFINewCommentNotifier'],(function a(b,c,d,e,f,g){'use strict';h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k));};function h(j,k){i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new (c('UFIDispatcher'))();this.$UFIAddCommentController4={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c('UFIAddCommentActionType').SUBMIT_NEW,function(l){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(j,'form'),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp);}.bind(this));this.$UFIAddCommentController5=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);c('UFICommentEditIDStore').addListener(function(){var l=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render();}}.bind(this));this.render();}h.prototype.render=function(){var j=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c('ReactDOM').render(j,this.$UFIAddCommentController1);};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove();};var i=function j(){this.renderAddComment=function(k,l){if(this.$UFIAddCommentController5!==null||!l||!l.cancomment||!l.actorforpost)return null;return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:l.actorforpost,replyCommentID:null,targetID:l.ownerid,initialData:null,ref:null,withoutSeparator:null,editingComment:{},isEditing:false,mentionsDataSource:l.mentionsdatasource,showSendOnEnterTip:l.showsendonentertip,multiCompanyGroupsCount:l.multicompanygroupscount,allowPhotoAttachments:l.allowphotoattachments&&!k.islivestreaming,allowVideoAttachments:l.allowvideoattachments&&!k.islivestreaming,allowStickerAttachments:l.allowstickerattachments&&!k.islivestreaming,allowGifAttachments:l.allowgifattachments&&!k.islivestreaming,allowTipJar:l.istipjarenabled&&k.islivestreaming,contextArgs:k,subtitle:l.subtitle,isQAndA:l.isqanda,keepFocus:k.islivestreaming});}.bind(this);};f.exports=h;}),null);
__d('MentionsInputTypeaheadView.react',['cx','MentionsTypeaheadViewItem.react','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$MentionsInputTypeaheadView1=function(r){var s=r===this.props.highlightedEntry;return (c('React').createElement(c('MentionsTypeaheadViewItem.react'),{key:r.getUniqueID(),entry:r,highlighted:s,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));}.bind(this),n;}l.prototype.render=function(){'use strict';var m="_5u8_"+(!this.props.entries.length?' '+"_5u90":'');return (c('React').createElement('ul',{className:m,role:'listbox',id:this.props.id},this.props.entries.map(this.$MentionsInputTypeaheadView1)));};l.propTypes={id:k.string,highlightedEntry:k.object,entries:k.array.isRequired,onSelect:k.func.isRequired,onHighlight:k.func,onRenderHighlight:k.func};f.exports=l;}),null);