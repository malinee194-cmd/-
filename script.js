(() => {
'use strict';
const data = [
{q:'การจับใจความสำคัญหมายถึงข้อใด',o:['การอ่านออกเสียงให้ถูกต้อง','การค้นหาสาระหลักที่ผู้เขียนต้องการสื่อ','การจดจำคำศัพท์ทุกคำ','การอ่านให้ได้จำนวนหน้ามากที่สุด'],a:1,e:'เป็นการค้นหาประเด็นหลักหรือสาระสำคัญของเรื่อง'},
{q:'ข้อใดเป็นลักษณะของใจความสำคัญ',o:['เป็นตัวอย่างเพียงตัวอย่างเดียว','เป็นข้อมูลปลีกย่อย','ครอบคลุมเนื้อหาส่วนอื่นของเรื่อง','เป็นคำขยายที่ตัดออกได้'],a:2,e:'ใจความสำคัญเป็นแก่นหรือประเด็นหลักที่ครอบคลุมรายละเอียด'},
{q:'รายละเอียดสนับสนุนมีหน้าที่อย่างไร',o:['ทำให้เรื่องยาวขึ้นเท่านั้น','ช่วยขยายความใจความสำคัญ','เปลี่ยนหัวข้อของเรื่อง','ทำให้ไม่ต้องสรุปเรื่อง'],a:1,e:'รายละเอียดช่วยอธิบาย ยกตัวอย่าง หรือให้เหตุผลประกอบประเด็นหลัก'},
{q:'ขั้นแรกของเทคนิคบันได 6 ขั้นคือข้อใด',o:['เรียบเรียงใหม่','ตัดรายละเอียด','อ่านให้ครบ','ตรวจสอบ'],a:2,e:'ควรอ่านเนื้อเรื่องทั้งหมดก่อน เพื่อให้เห็นภาพรวม'},
{q:'การสังเกตคำหรือข้อความที่กล่าวซ้ำอยู่ในขั้นใด',o:['ค้นหาคำสำคัญ','ตรวจสอบ','เรียบเรียงใหม่','ตัดรายละเอียด'],a:0,e:'การค้นหาคำสำคัญช่วยชี้ให้เห็นประเด็นที่ผู้เขียนเน้น'},
{q:'การตั้งคำถามใดช่วยค้นหาใจความสำคัญได้ดีที่สุด',o:['หนังสือเล่มนี้มีกี่หน้า','เรื่องนี้กล่าวถึงอะไร','ผู้เขียนใช้กระดาษชนิดใด','ตัวอักษรมีสีอะไร'],a:1,e:'คำถามว่าเรื่องกล่าวถึงอะไรช่วยค้นหาประเด็นหลัก'},
{q:'เมื่อต้องการสรุปใจความสำคัญ ควรเขียนอย่างไร',o:['คัดลอกทุกประโยค','เพิ่มความคิดเห็นที่ไม่เกี่ยวข้อง','ใช้ภาษาของตนเองอย่างกระชับ','เลือกเฉพาะประโยคที่ยาวที่สุด'],a:2,e:'ควรเรียบเรียงด้วยภาษาของตนเองให้กระชับและครอบคลุม'},
{q:'ข้อใดเป็นรายละเอียดสนับสนุนเรื่องประโยชน์ของการอ่าน',o:['การอ่านมีประโยชน์ต่อนักเรียน','การอ่านช่วยเพิ่มคลังคำศัพท์และฝึกสมาธิ','นักเรียนควรเห็นความสำคัญของการอ่าน','การอ่านเป็นกิจกรรมที่ดี'],a:1,e:'การเพิ่มคลังคำศัพท์และฝึกสมาธิเป็นข้อมูลที่อธิบายประโยชน์ของการอ่าน'},
{q:'หลังจากเรียบเรียงใจความสำคัญแล้วควรทำสิ่งใด',o:['หยุดอ่านทันที','เพิ่มรายละเอียดให้มากที่สุด','ตรวจสอบว่าสรุปครอบคลุมและตรงเรื่องหรือไม่','เปลี่ยนไปอ่านเรื่องอื่น'],a:2,e:'ขั้นสุดท้ายคือการตรวจสอบความถูกต้องและความครอบคลุมของสรุป'},
{q:'ข้อใดเป็นประโยชน์ของการจับใจความสำคัญ',o:['ช่วยให้เข้าใจสาระและนำข้อมูลไปใช้ได้','ทำให้อ่านข้ามทุกย่อหน้าได้','ทำให้ไม่ต้องคิดวิเคราะห์','ช่วยให้จำทุกคำในเรื่องได้'],a:0,e:'การจับใจความช่วยให้เข้าใจสาระสำคัญและเลือกใช้ข้อมูลได้เหมาะสม'}
];
const $=id=>document.getElementById(id);
const form=$('quizForm'), list=$('questions'), result=$('result');
const labels=['ก','ข','ค','ง'];
function render(){
 list.innerHTML=data.map((item,i)=>`<article class="q-card"><div class="q-title"><span class="q-num">${i+1}</span><span>${item.q}</span></div><div class="options">${item.o.map((opt,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"><span>${labels[j]}. ${opt}</span></label>`).join('')}</div></article>`).join('');
}
function progress(){
 const count=data.filter((_,i)=>form.querySelector(`input[name="q${i}"]:checked`)).length;
 const pct=Math.round(count/data.length*100);
 $('progressText').textContent=`ตอบแล้ว ${count} จาก ${data.length} ข้อ`;
 $('progressPct').textContent=`${pct}%`; $('progressFill').style.width=`${pct}%`;
}
function grade(ev){
 ev.preventDefault();
 const answers=data.map((_,i)=>{const el=form.querySelector(`input[name="q${i}"]:checked`);return el?Number(el.value):null;});
 const score=data.reduce((sum,item,i)=>sum+(answers[i]===item.a?1:0),0);
 $('score').textContent=`${score}/${data.length}`;
 $('resultTitle').textContent=score>=8?'ยอดเยี่ยมมาก!':score>=5?'ทำได้ดี ก้าวหน้าขึ้นแล้ว!':'ฝึกฝนอีกนิด แล้วจะเก่งขึ้น!';
 $('resultMessage').textContent=score>=8?'คุณเข้าใจหลักการจับใจความสำคัญได้ดีมาก':'ลองทบทวนบทเรียนและดูเฉลย เพื่อพัฒนาความเข้าใจให้ดียิ่งขึ้น';
 $('resultIcon').textContent=score>=8?'🏆':score>=5?'🌟':'📚';
 $('review').innerHTML=data.map((item,i)=>{const ok=answers[i]===item.a;const chosen=answers[i]===null?'ไม่ได้ตอบ':`${labels[answers[i]]}. ${item.o[answers[i]]}`;return `<div class="review-item ${ok?'good':'bad'}"><b>${i+1}. ${ok?'✓ ถูกต้อง':'✗ ยังไม่ถูกต้อง'}</b>คำตอบของคุณ: ${chosen}<br>เฉลย: ${labels[item.a]}. ${item.o[item.a]}<br>${item.e}</div>`;}).join('');
 result.hidden=false; $('review').hidden=true; $('reviewBtn').textContent='ดูเฉลยรายข้อ';
 result.scrollIntoView({behavior:'smooth',block:'nearest'});
}
form.addEventListener('change',progress);
form.addEventListener('submit',grade);
$('resetBtn').addEventListener('click',()=>{form.reset();result.hidden=true;progress();});
$('reviewBtn').addEventListener('click',()=>{const panel=$('review');panel.hidden=!panel.hidden;$('reviewBtn').textContent=panel.hidden?'ดูเฉลยรายข้อ':'ซ่อนเฉลย';});
$('answerBtn').addEventListener('click',()=>{const panel=$('answer');panel.hidden=!panel.hidden;$('answerBtn').setAttribute('aria-expanded',String(!panel.hidden));$('answerBtn').textContent=panel.hidden?'แสดงแนวคำตอบ ＋':'ซ่อนแนวคำตอบ −';});
$('menuBtn').addEventListener('click',()=>{const nav=$('nav');nav.classList.toggle('open');$('menuBtn').setAttribute('aria-expanded',String(nav.classList.contains('open')));});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{$('nav').classList.remove('open');$('menuBtn').setAttribute('aria-expanded','false');}));
$('year').textContent=new Date().getFullYear();
render();progress();
})();