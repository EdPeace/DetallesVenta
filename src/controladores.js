
let elementos=document.querySelectorAll('.foto');

cambios=(tipo)=>{
    let a=0, b=1, c=2, d=3;

    while(d<=(elementos.length+3)){
        decisiones(a,b,c,tipo,b,c,d);
        a+=3;
        b+=3;
        c+=3;
        d+=3;
    }
}
const decisiones=(po1, po2, po3, t, n1, n2,n3)=>{
    switch(t) {
        case n1:
                elementos[po1].style.display='block';
                elementos[po2].style.display='none';
                elementos[po3].style.display='none';
                break;

        case n2:
                elementos[po1].style.display='none';
                elementos[po2].style.display='block';
                elementos[po3].style.display='none';
                break;
        case n3:
                elementos[po1].style.display='none';
                elementos[po2].style.display='none';
                elementos[po3].style.display='block';
                break;
    }
}
