window.onload=function setContent(){   
    var number=document.getElementById("number");                     
    var list=number.getElementsByTagName("li");
    var content=document.getElementById("content");
    var div=content.getElementsByTagName("div");
    var combox = document.getElementById("menu");
    var click = document.getElementById("cli_on")
    var footer = document.getElementById("footer_click");
    var flag = true, timer = null, initime = null, r_len = 0; 
    for (var m=0;m<list.length;m++){
        (function(i){                                                                      
            list[i].onclick=function(){          
                for(var k=0;k<list.length;k++){
                    //��ul�µ�li���ظ�Ĭ����ʽ    
                    list[k].style.backgroundColor="";
                    list[k].style.color="#aaa7a7";
                    //���������ݶ���ʾ��
                    div[k].style.display="none";
                } 
                //�����li����ʽ�ı�
                this.style.backgroundColor="#108ee9";                   
                this.style.color="#FFF";
                //�������Ӧҳ����ʾ
                div[i].style.display="block";   
            } 
        })(m)      
    }
    click.onclick = function () {
     clearTimeout(initime);
     //����״̬flagִ��չ������
     if (flag) {
      r_len = 0;
      timer = setInterval(slideleft, 10);
     } else {
      r_len = -200;
      timer = setInterval(slideright, 10);
     }
    }
    //չ��
    function slideleft() {
      if (r_len <= -200) {
        clearInterval(timer);
        flag = !flag;
        return false;
      } else {
        r_len -= 20;
        combox.style.left = r_len + 'px';
        footer.style.paddingleft = "35%";
        content.style.width = "94.1%";
        click.style.left = "0";
        click.style.opacity = "0.8";
      }
    }
    //����
    function slideright() {
      if (r_len >= 0) {
        clearInterval(timer);
        flag = !flag;
        return false;
      } else {
        r_len += 20;
        combox.style.left = r_len + 'px';
        footer.style.paddingleft = "50%";
        content.style.width = "81%";
        click.style.left = "200px";
        click.style.opacity = "1";
        
      }
    }
    //���غ�20��ҳ���Զ�����
    initime = setTimeout("cli_on.click()", 20000);
    //rdk��ʾ
    fetch('https://t.vdfor.top/api/v0/docs/test/1').then(function(response){
      response.json().then(function(data){                                  
          document.querySelector("#rdk").innerHTML = data.data;
      })
      })



}


