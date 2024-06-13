const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var pathname = window.location.pathname;

const
  keys = urlParams.keys(),
  values = urlParams.values(),
  entries = urlParams.entries();

for(const entry of entries) {
  //console.log(`${entry[0]}: ${entry[1]}`);
}


//Ari Unsweetened Pillar Page
checkUrl = '/pages/unsweetened-pp-qxu'
checkUTM = 'utm_content'
checkUTMValue = 'ari'

if (pathname == checkUrl && urlParams.get(checkUTM) == checkUTMValue) {
	document.getElementById("US_Header_Desktop").src="//cdn.shopify.com/s/files/1/0066/6360/2223/files/D6_Banner_US_Almd_1920x690_c3f92afb-68a1-4928-8df8-9cb5a607f680.jpg";
	document.getElementById("US_Header_Mobile").src="//cdn.shopify.com/s/files/1/0066/6360/2223/files/D6_Banner_US_Almd_1200x1140_f009ce12-cfd7-4e57-a78e-85ab6f90a489.jpg";
}


//Ari Original Pillar Page
checkUrl = '/pages/original-pp-qxo'
checkUTM = 'utm_content'
checkUTMValue = 'ari'

if (pathname == checkUrl && urlParams.get(checkUTM) == checkUTMValue) {
	document.getElementById("OG_Header_Desktop").src="//cdn.shopify.com/s/files/1/0066/6360/2223/files/D6_Banner_OG_Oat_1920x690_4e7fcdce-ba33-4ada-9e6c-48646be8f5cd.jpg";
	document.getElementById("OG_Header_Mobile").src="//cdn.shopify.com/s/files/1/0066/6360/2223/files/D6_Banner_OG_Oat_1200x1140_71039650-1705-4ba0-b60d-b87f956b6220.jpg";
}



//Elmhurst Creamery Logo

//
checkUrl = '/pages/ice-cream-pp'

if (pathname == '/pages/ice-cream-pp') {
	$("#site_logo").attr("src","https://cdn.shopify.com/s/files/1/0066/6360/2223/files/elmhurst_creamery_logo_black.jpg");
	$("#site_logo").attr("data-srcset","https://cdn.shopify.com/s/files/1/0066/6360/2223/files/elmhurst_creamery_logo_black.jpg");
}


