let saturate=document.getElementById("saturate"),contrast=document.getElementById("contrast"),brightness=document.getElementById("brightness"),sepia=document.getElementById("sepia"),grayscale=document.getElementById("grayscale"),blurs=document.getElementById("blurs"),huerotate=document.getElementById("huerotate"),upload=document.getElementById("upload"),download=document.getElementById("download"),img=document.getElementById("image"),reset=document.querySelector("span"),imgbox=document.querySelector(".img-box"),canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");function resetvalue(){saturate.value="100",contrast.value="100",brightness.value="100",sepia.value="0",grayscale.value="0",blurs.value="0",huerotate.value="0",ctx.filter=`hue-rotate(${huerotate.value}deg)
                saturate(${saturate.value}%)
               contrast(${contrast.value}%)
               brightness(${brightness.value}%)
               sepia(${sepia.value}%)
               grayscale(${grayscale.value})
               blur(${blurs.value}px)`,ctx.drawImage(img,0,0,canvas.width,canvas.height)}window.onload=function(){download.style.display="none",reset.style.display="none",imgbox.style.display="none"},upload.onchange=function(){resetvalue(),download.style.display="block",reset.style.display="block",imgbox.style.display="block";let e=new FileReader;e.readAsDataURL(upload.files[0]),e.onload=function(){img.src=e.result},img.onload=function(){canvas.width=img.width,canvas.height=img.height,ctx.drawImage(img,0,0,canvas.width,canvas.height),img.style.display="none"}};let filters=document.querySelectorAll("ul li input");filters.forEach(e=>{e.addEventListener("input",function(){ctx.filter=` saturate(${saturate.value}%)
               contrast(${contrast.value}%)
               brightness(${brightness.value}%)
               sepia(${sepia.value}%)
               grayscale(${grayscale.value})
               blur(${blurs.value}px)
               hue-rotate(${huerotate.value}deg)`,ctx.drawImage(img,0,0,canvas.width,canvas.height)})}),download.onclick=function(){download.href=canvas.toDataURL()};