const puppeteer= require('puppeteer');
const url1=url1='https://my.stu.edu.cn/v3/';

(async () =>{
	
	const browser = await (	puppeteer.launch({
					executablePath: '/Users/imiss/Documents/chromium/chrome.exe',
					headless:false,
					ignoreHTTPSErrors:true}));
	const page=await browser.newPage();
try{
	await page.goto(url1);//进入Mystu
	console.time();
	await page.type('#txtUserID','17jmlu1',{delay:30});
    await page.type('#txtUserPwd','LUOYINGLIN',{delay:30});
	await page.click('#btnLogon');
	await page.waitForNavigation({
    waitUntil: 'load'
  });//等待页面加载出来，等同于window.onload
	//await page.waitFor(2000);
	const logurl=page.url();
	console.log(logurl);
	if (url1==logurl)
	{	console.log('登陆失败');}
	else	{console.log('登陆成功');}
	console.timeEnd();
}
catch(e) {	
	alert('无法显示页面');
	console.log("Error:Failed to connect Pages")
	}
finally{
await browser.close();}
	})();
	