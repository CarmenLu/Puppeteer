const puppeteer= require('puppeteer');
const url1='http://credit.stu.edu.cn/english/setlocale.aspx?locale=zh-cn';
//const url2='http://credit.stu.edu.cn/portal/STUMainPage.aspx';

(async () =>{
	
	const browser = await (	puppeteer.launch({
					executablePath: '/Users/imiss/Documents/chromium/chrome.exe',
					headless:false,
					ignoreHTTPSErrors:true}));
	const page=await browser.newPage();
try{
	await page.goto(url1);//进入学分制系统
	console.time();
	await page.type('#txtUserID','17jmlu1',{delay:30});
    await page.type('#txtUserPwd','LUOYINGLINwan520',{delay:30});
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
	console.log("Error:Failed to connect Pages");
	await page.waitFor(2000);
	}
finally{
await browser.close();
}
	})();
	