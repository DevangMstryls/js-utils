export default function pmtAccordion(userOptions) {
	var defaultOptions = {
		openOnlyOne: true,
		contCls: '.acc-cont',
		headCls: '.acc-head',
		bodyCls: '.acc-body',
	};
	var options = jQuery.extend({}, defaultOptions, userOptions);
	
	var openClsName = 'opened';
	// var openCls = '.' + openClsName;
	
	// pass a selector that is nested under a container
	jQuery(options.headCls).on({
		
		click: function () {
			
			var $this = jQuery(this);
			var group = $this.data('group');
			var $accItemBody = jQuery(options.bodyCls + '[data-group="' + group + '"]');
			var $accCont = $this.closest(options.contCls);
			
			if ($this.hasClass(openClsName)) {
				// hide current
				$accItemBody.slideUp();
				$this.removeClass(openClsName);
			}
			else {
				if (options.openOnlyOne) {
					// hide all
					$accCont.find(options.bodyCls).slideUp();
					$accCont.find(options.headCls).removeClass(openClsName);
				}
				
				// show current
				$accItemBody.slideDown();
				if ($this.hasClass('has-submenus')) {
					$this.addClass(openClsName);
				}
			}
			
		}
		
	});
}
