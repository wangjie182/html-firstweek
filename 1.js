           //写入HTML输出
           document.write("<h1>This is a heading</h1>");
           document.write("<p>This is a paragraph.</p>");
           //改变HTML内容
           function myfunction()
           {
               x=document.getElementById("demo");//找到元素
               //x.innerHTML="Hello JavaScript!";//改变内容
               //document.getElementById("demo").innerHTML="Hello JavaScript!";//同上
               x.style.color="red";//改变颜色
           }
           //改变HTML图像的来源
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
           //输入不是数字是会弹出提示框
           function myfunction2()
           {
               var x=document.getElementById("demo2").value;
               if(x==""||isNaN(x))
               {
                   alert("不是数字，请重输");
               }
               else
               {
                   alert("输入成功")
               }
           }
           //测试代码例子
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
          //控制程序流，并生成自定义的错误消息
          /*
          function myFunction()
          {
          try
          { 
          var x=document.getElementById("demo").value;
          if(x=="")    throw "值为空";
          if(isNaN(x)) throw "不是数字";
          if(x>10)     throw "太大";
          if(x<5)      throw "太小";
          }
          catch(err)
          {
          var y=document.getElementById("mess");
          y.innerHTML="错误：" + err + "。";
          }
          }
          */
