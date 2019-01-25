export class PmtAccordion {
	defaultOptions = {
		openOnlyOne: true,
		contCls: '.acc-cont',
		headCls: '.acc-head',
		bodyCls: '.acc-body',
		onOpen: undefined,
		onClose: undefined,
	};
	openClsName = 'opened';
	options = {};
	userOptions = {};

	contextVars = {};

	constructor(userOptions) {
		this.userOptions = userOptions;
		this.options = jQuery.extend({}, this.defaultOptions, this.userOptions);

		this.init();
	}

	init() {
		this._handleClick();
	}

	_setContextVars(group) {
		this.contextVars['group'] = group;
		this.contextVars['$accItemHead'] = jQuery(this.options.headCls + '[data-group="' + group + '"]');
		this.contextVars['$accItemBody'] = jQuery(this.options.bodyCls + '[data-group="' + group + '"]');
		this.contextVars['$accCont'] = this.contextVars.$accItemHead.closest(this.options.contCls);
	}

	/**
	 * For expanding a particular panel externally
	 * */
	expand(group) {
		this._setContextVars(group);
		this._expandCurrent();
	}

	/**
	 * For collapsing a particular panel externally
	 * */
	collapse(group) {
		this._setContextVars(group);
		this._collapseCurrent();
	}

	/**
	 * This is completely dependent on the current context vars
	 * */
	_expandCurrent() {
		// show current

		this.contextVars.$accItemBody.slideDown();
		this.contextVars.$accItemHead.addClass(this.openClsName);

		let self = this;

		// callback
		if( typeof this.options.onOpen === 'function') {
			this.options.onOpen({
				data:{
					group: self.contextVars.group,
				}
			});
		}
		else {
			// console.info('onOpen is not a function');
		}
	}

	/**
	 * This is completely dependent on the current context vars
	 * */
	_collapseCurrent() {
		// hide current
		this.contextVars.$accItemBody.slideUp();
		this.contextVars.$accItemHead.removeClass(this.openClsName);

		let self = this;

		// callback
		if( typeof this.options.onClose === 'function') {
			this.options.onClose({
				data:{
					group: self.contextVars.group,
				}
			});
		}
		else {
			// console.info('onClose is not a function');
		}
	}

	/**
	 * This is completely dependent on the current context vars
	 * */
	_collapseAll() {
		// find all the accordion body els in this container and close them
		this.contextVars.$accCont.find(this.options.bodyCls).slideUp();
		// find all the accordion head els in this container and remove the open class from them
		this.contextVars.$accCont.find(this.options.headCls).removeClass(this.openClsName);
	}

	_handleClick() {
		let self = this;

		// pass a selector that is nested under a container
		jQuery(self.options.headCls).on({
			click: function () {

				let $this = jQuery(this);
				let group = $this.data('group');
				self._setContextVars(group);

				if ($this.hasClass(self.openClsName)) {
					self._collapseCurrent();
				}
				else {
					if (self.options.openOnlyOne) {
						// hide all
						self._collapseAll();
					}

					self._expandCurrent();
				}
			}
		});
	}

}
