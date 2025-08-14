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

if(typeof NICK == "undefined" || !NICK) var NICK = {};

NICK.flux = (function() {

	var baseURL = 'https://web.archive.org/web/20140212154135/http://daapiak.flux.com/2.0/00001/JSON/';
	var ucid = '95F6FFFF0099CB350002FFFFF695';
	var location = window.location.href;
	var commentsLength = 10;
	var contributors = Array();
	var defaultContributorImage = "https://web.archive.org/web/20140212154135/http://filesll.fluxstatic.com/0000000000000000000100000000/TNV/Jpg/B-15472/AR90x90";
	var haloContentUrl = "";
	var haloContent = false;

	// Check Flux login object to see if user is logged in.
	var userLoggedIn = function() {
		return (typeof Flux4 === 'object') && (Flux4.getContext().user != null);
	};

	// Show Flux sign-in box.
	var launchSignInWidget = function() {
		Flux4.signIn(null, null, 'Login');
	};

	// Kicks user to referring page OR homepage.
	var kickbackUserToReferrer = function() {
		var referrer = (document.referrer != '') ? document.referrer : '/';
		document.location = referrer;
	};

	// Bind event to signOut that kicks them back to the homepage.
	var setupKickbackBinding = function() {
		Flux4.addEventListener('signOut', function (eventContext, userContext) {
			kickbackUserToReferrer();
		});
	};

	/**
	 *	Roadblocks a page.
	 *	1. It will force a login box if the user is not already logged in.
	 *	2. It binds an event to the Close button of the login box to kick them out 
	 *	if they do not login.
	 *	3. It binds an event to a Flux Sign Out to kick them out if they logout at 
	 *	any point.
	 */
	var loginRequired = function(required) {
		if (required) {
			// If they aren't logged in, show the login window on page load.
			if (userLoggedIn() === false) {
				$('.closeButton').live('click', function() {
					// If they close the signIn window and aren't logged in, 
					// kick them back to where they arrived from OR the homepage.
					if (!userLoggedIn()) {
						kickbackUserToReferrer();
					}
				});
				launchSignInWidget();
			}
			// Bind the kickback to the Sign Out event.
			setupKickbackBinding();
		}
	};

	// Display the sign in/logout box in the header. Called on every page load.
	var createUserBar = function() {
		Flux4.createWidget('UserBar', {container: $('#mynick-public-nav'), displayMode: 'EmbeddedTop'});
	};

	return {
		loginRequired: loginRequired,
		createUserBar: createUserBar
	}

})();

userMgr = {};
userMgr.loginRequired = function(required) {
	NICK.flux.loginRequired(required);
};

$(document).ready(function(){
	NICK.flux.createUserBar();
});

}
/*
     FILE ARCHIVED ON 15:41:35 Feb 12, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:27:31 Aug 14, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.706
  exclusion.robots: 0.035
  exclusion.robots.policy: 0.02
  esindex: 0.015
  cdx.remote: 1226.953
  LoadShardBlock: 97.591 (3)
  PetaboxLoader3.datanode: 104.718 (4)
  load_resource: 17.519
*/