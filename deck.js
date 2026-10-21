/* Compteur d'écrans et points de progression des présentations sur téléphone. */
(function(){
  var sls=[].slice.call(document.querySelectorAll('.sl')),dots=document.getElementById('dots'),cpt=document.getElementById('cpt');
  if(!sls.length||!dots||!cpt)return;
  sls.forEach(function(){dots.appendChild(document.createElement('i'))});
  var ds=[].slice.call(dots.children);
  cpt.textContent='1 / '+sls.length;ds[0].classList.add('on');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting&&e.intersectionRatio>.55){var i=sls.indexOf(e.target);cpt.textContent=(i+1)+' / '+sls.length;ds.forEach(function(d,j){d.classList.toggle('on',j===i)});}
  })},{threshold:[.55]});
  sls.forEach(function(s){io.observe(s)});
})();
