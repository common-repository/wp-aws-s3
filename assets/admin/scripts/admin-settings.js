function removeChar(e){var t=e.value;" "==(t=t.replace(/[^0-9,.]/g,""))&&(t=""),e.value=t}function removeDate(e){var t=e.value;" "==(t=t.replace(/[^0-9-]/g,""))&&(t=""),e.value=t}function removeSpace(e){var t=e.value;" "==(t=t.replace(/[^A-Za-z0-9@_.-=>%^*()<!&#$]/g,""))&&(t=""),e.value=t}function custom_folder_aws(e){var t=e.value,a=document.querySelector("#aws_path_folder_div");a.style.display="custom"==t?"block":"none"}function enable_crop_status(e){var t=document.getElementById("themeDev_div_enable__"+e.id);t&&t.classList.toggle("enable_themeDev_div")}function copyLinkItem(e){document.getElementById("copyLinkText__"+e).select(),document.execCommand("copy")}function themedev_download_link(e){if(e){var t=e.getAttribute("themedev-link"),a=e.getAttribute("themedev-store");if(t){var n="link="+t+"&store="+a;jQuery.ajax({data:n,type:"get",url:themedev_aws_url.siteurl+"/wp-json/themedev-submit-form/download-files/1",success:function(e){alert(e)}})}}}


function nxaws_go_back(){
	window.history.back();
}

function nxaws_go_forword(){
	window.history.forward();
}