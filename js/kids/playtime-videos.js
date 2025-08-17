var currentSelectedVideoID = 0;
var controller = new MTVNPlayerController('embeddedPlayer','onPlayerLoaded');

function onPlayerLoaded(controller){
   player = controller.player;
   player.addEventListener('READY','onReady');
   player.addEventListener('METADATA','onMetaData');
   player.addEventListener('STATE_CHANGE','onStateChange');
   player.addEventListener('PLAYHEAD_UPDATE','onPlayheadUpdate');
   player.addEventListener('NO_AD','onNoAd');
   player.addEventListener('AD_PACKAGE_LOADED','onAdPackageLoaded');
   player.addEventListener('MEDIA_ENDED','onMediaEnded');
   player.addEventListener('PLAYLIST_COMPLETE','onPlaylistComplete');
   player.addEventListener('PLAYLIST_ERROR','onPlaylistError');   
   //alert("LOADED");   
}

function onReady() {		 
	//var api = $("div.scrollable:first").scrollable(); 
	//alert("onReady playing index: " + player.getPlaylist().index);
	//focusCurrentPlayingVideo(player.getPlaylist().index);
	updatePlaylist(player.getPlaylist().index);
	loadRC();
	//loadRateThis();	
	loadInfoWindow();
	updateShare(getCMSIDfromGUID(player.getMetadata().guid));
	forcedMutePlayerCheck("nickjrParentsHub");
}  

function onMetaData( metadata ){
	//show_props(metadata, "metadata");
   //alert("Now watching: " + metadata.title + ":" + player.getTempPlaylist());
   //alert("player.metadata.isAd" + player.getMetadata().isAd);
   //focusCurrentPlayingVideo(player.getPlaylist().index);
	//var output = metadata.title + "</br>" + metadata.description + "</br>" + metadata.duration + "</br>" + metadata.url + "</br>id: " + getCMSIDfromGUID(player.getMetadata().guid);
	//document.getElementById("fpVideoInfo").innerHTML = output;
	updateShare(getCMSIDfromGUID(player.getMetadata().guid));
	
}

function show_props(obj, obj_name) {
	//alert("showprops" + obj + " " + obj_name);
    var result = "" 
    for (var i in obj) {
        result += obj_name + "." + i + " = " + obj[i] + "<br />"; 
	}
	//alert(result);
    $("#metatest").html(result);
}


function onStateChange(playState) {
	//alert("playstate change");
}

function onPlayheadUpdate(info) {
	//alert("playhead update");
}

function onNoAd( info ) {
	//alert("no ad");
   // info.metadata
   // info.adUrl
   // info.counters
} 

function onAdPackageLoaded(info) {
	//alert("onAdPackageLoaded");
}

function onMediaEnded(info) {
	//alert("onMediaEnded");
}

function onPlaylistComplete(info) {
	player.playIndex(0, 0);
}

function onPlaylistError(info) {
	//alert("onPlaylistError");
}	

function nextVideo() {
	if (!player.getMetadata().isAd) {	
		player.next();
	}
}

function prevVideo() {
	if (!player.getMetadata().isAd) {
		player.previous();
	}
}

function getCMSIDfromGUID(guid) {
	
	if (guid != null) {
		var a=guid.split(":");
		return(a[4]);	
	} else {
		return null;
	}

}

//playlist
function focusCurrentPlayingVideo(cmsid) {
	//unselect current video	
	if (index >= 0) {
		$('#'+currentSelectedVideoID).className = 'videoNotSelected';	
		//select video playing
		currentSelectedVideoID = getCMSIDfromGUID(player.getMetadata().guid);
		$('#'+currentSelectedVideoID).className = 'videoSelected';		
	}	
}

function playVideo(index) {
	if (!player.getMetadata().isAd) {
		player.playIndex(index, 0);
	}
}	

function thisMovie(movieName) {
 if (navigator.appName.indexOf("Microsoft") != -1) {
	 return window[movieName];
 } else {
	 return document[movieName];
 }
}
function updatePlaylist(value) {
 thisMovie("playlist").updatePlaylist(value);
}


//coad
function mtvnSetCoad(adObject){ 
	//alert("video ad, set coad");
	var src = adObject.url; 
	var w = adObject.width; 
	var h = adObject.height;
	var clickTag = adObject.clickUrl; 
	//var output = "<a href='" + clickTag + "'>" + "<img border='0' width='" + w + "' height='" + h + "' src='" + src + "' /></a>";
	//document.getElementById("coAdHtmlContainer").innerHTML = output;	
	//alert("Ad Src:" + src);
	document.getElementById("iFrameAd").src = src;
} 

//info window
function loadInfoWindow() {
	//alert("loadInfoWindow");
	if (!player.getMetadata().isAd) {
		$('#videoInfoContainer h1').html(player.getMetadata().title);
		$('#videoInfoContainer p').html(player.getMetadata().description);
	} else {
		$('#videoInfoContainer h1').html("Advertisement");	
		$('#videoInfoContainer p').html("Your video will begin after this word from our sponsor.");
	}
}

//share with a friend, deeplink info
function updateShare(value) {
 thisMovie("shareURL").updateShare(value);
}

 function shareIsLoaded(value) {
	updateShare(getCMSIDfromGUID(player.getMetadata().guid));
 }


//rc		
function loadRC() {
	
if (!player.getMetadata().isAd) {
	//alert("loadrc");
	//$("#relatedContentContainer").append('<div id="relatedList"></div>')							
	//.load("getRelatedContent.jhtml?cmsid=" + getCMSIDfromGUID(player.getMetadata().guid) +" div#relatedList", function() {
	//		$("#relatedList").show();
	//	});
	$("#relatedContentContainer").load("/videoplayer/hub/getRelatedContent.jhtml?cmsid=" + getCMSIDfromGUID(player.getMetadata().guid),function() { return false});

	return false;
}
	

};


function onRelatedContentTabClick() {
		$("#relatedContentContainer").show();
		$("#sendToAFriendContainer").hide();
		$('#relatedContentTab').hasClass('selected') ? false : $('#relatedContentTab').addClass('selected');
		$('#sendToAFriendTab').hasClass('selected')	? $('#sendToAFriendTab').removeClass('selected') : false;
};
function onSendToAFriendTabClick() {	
		$("#relatedContentContainer").hide(); 
		$("#sendToAFriendContainer").show();
		$('#sendToAFriendTab').hasClass('selected') 	? false : $('#sendToAFriendTab').addClass('selected');
		$('#relatedContentTab').hasClass('selected')	? $('#relatedContentTab').removeClass('selected') : false;
		
};
function onMoreToggleButtonClick() {
		$("#channelsShowContainer").toggle(); 
		$("#moreContainer").toggle(); 	
};


/*  
//rateThis
function loadRateThis() {
	$("#rateThisTitleContainer").html(player.getMetadata().title);	
	
	//set stars to rating from cms
	jQuery.post("/dynamo/turbonick/xml/dyn/getItemRating.jhtml",{	 
		 id: getCMSIDfromGUID(player.getMetadata().guid)
	   }, function(data) {
	
		// response structure
		//<?xml version="1.0" encoding="utf-8" ?>
		//<response code="OK">
		//<rating>0</rating>
		//<ratingTotal>0</ratingTotal>
		//<ratingTotalCount>0</ratingTotalCount>
		//</response>
		//

		//alert(());
		setRating(parseInt($("rating",data).text()));
	});
}
*/

/*
function setRating(id) {