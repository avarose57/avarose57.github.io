var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// only possibly show the ad entry page if not in ad-free mode.
if (document.location.search.match(/[&?]af=1/) == null && document.location.search.match(/[&?]xid/) == null && document.location.search.match(/[&?]XID/) == null) {
	if (getCookieValue("adEntryPageShown")) {
		// the ad entry page has been shown, so do nothing.
	} else {
		// the ad entry page has not been shown, so show it and set the cookie.
		window.location.href = '/kids-ad-entry.html?url=' + window.location.pathname;		
		writeSessionCookie("adEntryPageShown", "true");
	}	
}

}
/*
     FILE ARCHIVED ON 02:29:58 Apr 30, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:48:43 Aug 14, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.464
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.011
  cdx.remote: 2030.352
  LoadShardBlock: 196.238 (3)
  PetaboxLoader3.datanode: 224.956 (4)
  load_resource: 412.842
  PetaboxLoader3.resolve: 319.222
*/