           //д��HTML���
           document.write("<h1>This is a heading</h1>");
           document.write("<p>This is a paragraph.</p>");
           //�ı�HTML����
           function myfunction()
           {
               x=document.getElementById("demo");//�ҵ�Ԫ��
               //x.innerHTML="Hello JavaScript!";//�ı�����
               //document.getElementById("demo").innerHTML="Hello JavaScript!";//ͬ��
               x.style.color="red";//�ı���ɫ
           }
           //�ı�HTMLͼ�����Դ
           function changeimage()
           {
               element=document.getElementById('myimage')
               if(element.src.match("button"))
               {
                   element.src="33.jpg";
               }
               else
               {
                   element.src="22.jpg";
               }
               
           }
           //���벻�������ǻᵯ����ʾ��
           function myfunction2()
           {
               var x=document.getElementById("demo2").value;
               if(x==""||isNaN(x))
               {
                   alert("�������֣�������");
               }
               else
               {
                   alert("����ɹ�")
               }
           }
           //���Դ�������
           /*
           var txt="";
           function message()
           {
           try
             {
             adddlert("Welcome guest!");
             }
           catch(err)
             {
             txt="There was an error on this page.\n\n";
             txt+="Error description: " + err.message + "\n\n";
             txt+="Click OK to continue.\n\n";
             alert(txt);
             }
           }
           */
          //���Ƴ��������������Զ���Ĵ�����Ϣ
          /*
          function myFunction()
          {
          try
          { 
          var x=document.getElementById("demo").value;
          if(x=="")    throw "ֵΪ��";
          if(isNaN(x)) throw "��������";
          if(x>10)     throw "̫��";
          if(x<5)      throw "̫С";
          }
          catch(err)
          {
          var y=document.getElementById("mess");
          y.innerHTML="����" + err + "��";
          }
          }
          */
