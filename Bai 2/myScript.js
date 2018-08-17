var news = 
	[
		{
			"date" : "2018-03-21",
			"title" : "Sự kỳ diệu của nghệ thuật đường phố",
			"auther" : "HÀ ANH",
			"content" : "Các tác phẩm này chứng minh rằng các nghệ sĩ tài hoa đã đưa thực tế cuộc sống vào nghệ thuật một cách xuất sắc."
		},

		{
			"date" : "2018-08-18",
			"title" : "Olympic Việt Nam giành vé sớm vào vòng knock-out ASIAD 2018, tranh ngôi nhất bảng với Nhật Bản",
			"auther" : "NAM THIÊN",
			"content" : "Thầy trò HLV Park Hang Seo đã chắc chắn có mặt ở vòng 1/8 môn bóng đá nam ASIAD 2018 sau chiến thắng 2-0 trước Olympic Nepal. Ở lượt đấu cuối, thầy trò HLV Park Hang Seo sẽ chạm trán Olympic Nhật Bản để cạnh tranh ngôi nhất bảng D. Nếu giành được vị trí số 1, Olympic Việt Nam có thể sẽ tránh được Hàn Quốc ở vòng 1/8."
		}
	];

function insertTable(){
  var list = news.map(function(item){
    var row ='<tr><td>' + item.date + '</td>' 
              + '<td>' + item.title + '</td>' 
              + '<td>' + item.auther + '</td>'
              + '<td>' + item.content + '</td> <td onmouseover = "deletePost()" style = "cursor: pointer; color:red; background:yellow; text-align: center">Delete </td></tr>';
    document.getElementById("table").insertAdjacentHTML('beforeend', row) ;
    return row;
  });
}

//xóa bài Post
function deletePost(){
  var index, table = document.getElementById("table");
  for(var i = 1; i < table.rows.length; i++)
  {
    table.rows[i].cells[4].onclick = function()
    {
      index = this.parentElement.rowIndex;
      table.deleteRow(index);
    };
  }
}    


  //thêm bài post 
function addPost(){
  var getDate = document.getElementById("date").value;
  var getTitle = document.getElementById("title").value;
  var getAuther = document.getElementById("auther").value;
  var getContent = document.getElementById("content").value;

  var thongBao =document.getElementById("thongBao");
      if (getDate === ""
         || getTitle === ""
         || getAuther === ""
         || getContent === "") {
            thongBao.style.display="block";
            thongBao.innerHTML="Hãy nhập đầy đủ vào các trường"+"<br/>";
            return false;
      }
      else{
      var news = [];
      news.push({date:getDate, title:getTitle, auther:getAuther, content:getContent});

      var list = news.map(function(item){
        var row ='<tr><td>' + item.date + '</td>' 
                  + '<td>' + item.title + '</td>' 
                  + '<td>' + item.auther + '</td>'
                  + '<td>' + item.content + '</td> <td onmouseover = "deletePost()" style = "cursor: pointer; color:red; background:yellow; text-align: center">Delete </td></tr>';
        document.getElementById("table").insertAdjacentHTML('beforeend', row) ;
        return row;
      });
  }
  //Xóa bài post
  return deletePost();
}

//kiểm tra nhập