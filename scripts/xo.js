var xo=[];

function clickX(row,col,element)
{
    if(document.getElementById("res").innerText!="")
    {
        location.reload();
        return false;
    }

    if(element.value!=''){
      element.value = 'x';
      if(xo[row]==undefined){
      xo[row]=[];}
      xo[row][col]='x';
      var win=checkWinenr(xo,Array(row,col),'x');
      if(win){
        document.getElementById("res").innerText='YOU WIN';
      }
      var move=getpostoWin(xo);
      if(move!=false)
      {
        document.getElementById("elem"+move[0]+move[1]).value ='o';
      }
      else
      {
        var move=getposToProtect(xo);
        if(move!=false)
        {
          document.getElementById("elem"+move[0]+move[1]).value ='o';
        }
        else
        {
            var move=getRandomOne(xo);
            document.getElementById("elem"+move[0]+move[1]).value ='o';
        }
      }
      if(xo[move[0]]==undefined)
      {
        xo[move[0]]=[];
      }
      xo[move[0]][move[1]]='o';
      var win=checkWinenr(xo,move,'o');
      if(win){
        document.getElementById("res").innerText='YOU Lose';
      }

    }
}
function getpostoWin(xo) {
     for (var row = 0; row < xo.length; row++) {
        var ro = xo[row];
        if(ro!=undefined){
            for (var col = 0; col < ro.length; col++) {
                if(xo[row][col]=="o")
                {
                    // all possible one by one step
                    if(col==0)
                    {
                        if((xo[row]==undefined || xo[row][col+1]==undefined) && xo[row]!=undefined && xo[row][col+2]!=undefined && xo[row][col+2]=="o")
                        {
                            return Array(row,1);
                        }
                        else if((xo[row]==undefined || xo[row][col+2]==undefined) && xo[row]!=undefined && xo[row][col+1]!=undefined && xo[row][col+1]=="o")
                        {
                            return Array(row,2);
                        }
                    }
                    else if(col==1)
                    {
                        if((xo[row]==undefined || xo[row][col-1]==undefined) && xo[row]!=undefined && xo[row][col+1]!=undefined && xo[row][col+1]=="o")
                        {
                            return Array(row,0);
                        }
                        else if((xo[row]==undefined || xo[row][col+1]==undefined) && xo[row]!=undefined  && xo[row][col-1]!=undefined && xo[row][col-1]=="o")
                        {
                            return Array(row,2);
                        }
                    }
                    else if(col==2)
                    {
                        if((xo[row]==undefined || xo[row][col-1]==undefined) && xo[row]!=undefined && xo[row][col-2]!=undefined && xo[row][col-2]=="o")
                        {
                            return Array(row,1);
                        }
                        else if((xo[row]==undefined || xo[row][col-2]==undefined) && xo[row]!=undefined && xo[row][col-1]!=undefined && xo[row][col-1]=="o")
                        {
                            return Array(row,2);
                        }
                    }


                    if(row==0)
                    {
                        if((xo[row+1]==undefined || xo[row+1][col]==undefined) && xo[row+2]!=undefined && xo[row+2][col]!=undefined && xo[row+2][col]=="o")
                        {
                            return Array(1,col);
                        }
                        else if((xo[row+2]==undefined || xo[row+2][col]==undefined) && xo[row+1]!=undefined && xo[row+1][col]!=undefined && xo[row+1][col]=="o")
                        {
                            return Array(2,col);
                        }
                    }
                    else if(row==1)
                    {
                        if((xo[row-1]==undefined || xo[row-1][col]==undefined) && xo[row+1]!=undefined && xo[row+1][col]!=undefined && xo[row+1][col]=="o")
                        {
                            return Array(0,col);
                        }
                        else if((xo[row+1]==undefined || xo[row+1][col]==undefined) && xo[row-1]!=undefined && xo[row-1][col]!=undefined && xo[row-1][col]=="o")
                        {
                            return Array(2,col);
                        }
                    }
                    else if(row==2)
                    {
                        if((xo[row-1]==undefined || xo[row-1][col]==undefined) && xo[row-2]!=undefined && xo[row-2][col]!=undefined && xo[row-2][col]=="o")
                        {
                            return Array(1,col);
                        }
                        else if((xo[row-2]==undefined || xo[row-2][col]==undefined) && xo[row-1]!=undefined && xo[row-1][col]!=undefined && xo[row-1][col]=="o")
                        {
                            return Array(2,col);
                        }
                    }
                    if(row==0 && col==0)
                    {
                        if((xo[1]==undefined || xo[1][1]==undefined) && xo[2]!=undefine && xo[2][2]!=undefined && xo[2][2]=="o")
                        {
                            return Array(1,1);
                        }
                        else if((xo[2]==undefined || xo[2][2]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]=="o")
                        {
                            return Array(2,2);
                        }
                    }
                    else if(row==0 && col==2)
                    {
                        if((xo[1]==undefined || xo[1][1]==undefined) && xo[2]!=undefined && xo[2][0]!=undefined && xo[2][0]=="o")
                        {
                            return Array(1,1);
                        }
                        else if((xo[2]==undefined || xo[2][0]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]=="o")
                        {
                            return Array(2,0);
                        }
                    }
                    else if(row==2 && col==0)
                    {
                        if((xo[1]==undefined || xo[1][1]==undefined) && xo[0]!=undefined && xo[0][2]!=undefined && xo[0][2]=="o")
                        {
                            return Array(1,1);
                        }
                        else if((xo[0]==undefined || xo[0][2]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]=="o")
                        {
                            return Array(0,2);
                        }
                    }
                    else if(row==2 && col==2)
                    {
                        if((xo[1]==undefined || xo[1][1]==undefined) && xo[0]!=undefined && xo[0][0]!=undefined && xo[0][0]=="o")
                        {
                            return Array(1,1);
                        }
                        else if((xo[0]==undefined || xo[0][0]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]=="o")
                        {
                            return Array(0,0);
                        }
                    }
                    else if(row==1 && col==1)
                    {
                        if((xo[2]==undefined || xo[2][2]==undefined) && xo[0]!=undefined && xo[0][0]!=undefined && xo[0][0]=="o")
                        {
                            return Array(2,2);
                        }
                        else if((xo[0]==undefined || xo[0][0]==undefined) && xo[2]!=undefined && xo[2][2]!=undefined && xo[2][2]=="o")
                        {
                            return Array(0,0);
                        }
                        else if((xo[0]==undefined || xo[0][2]==undefined) && xo[2]!=undefined && xo[2][0]!=undefined && xo[2][0]=="o")
                        {
                            return Array(0,2);
                        }
                        else if((xo[2]==undefined || xo[2][0]==undefined) && xo[0]!=undefined && xo[0][2]!=undefined && xo[0][2]=="o")
                        {
                            return Array(2,0);
                        }
                    }                
                    
                }
            }
        }
     }
     return false;
}
function getposToProtect(xo)
{
    for (var row = 0; row < xo.length; row++) {
        var ro = xo[row];
        if(ro!=undefined){
            for (var col = 0; col < ro.length; col++) {            
                if(xo[row][col]=="x")
                {
                    if(col==0)
                    {
                        if((xo[row]==undefined || xo[row][col+1]==undefined) && xo[row]!=undefined && xo[row][col+2]!=undefined && xo[row][col+2]=="x")
                        {
                            return Array(row,1);
                        }
                        else if((xo[row]==undefined || xo[row][col+2]==undefined) && xo[row]!=undefined && xo[row][col+1]!=undefined && xo[row][col+1]=="x")
                        {
                            return Array(row,2);
                        }
                    }
                    else if(col==1)
                    {
                        if((xo[row]==undefined || xo[row][col-1]==undefined) && xo[row]!=undefined && xo[row][col+1]!=undefined && xo[row][col+1]=="x")
                        {
                            return Array(row,0);
                        }
                        else if((xo[row]==undefined || xo[row][col+1]==undefined) && xo[row]!=undefined && xo[row][col-1]!=undefined && xo[row][col-1]=="x")
                        {
                            return Array(row,2);
                        }
                    }
                    else if(col==2)
                    {
                        if((xo[row]==undefined || xo[row][col-1]==undefined) && xo[row]!=undefined && xo[row][col-2]!=undefined && xo[row][col-2]=="x")
                        {
                            return Array(row,1);
                        }
                        else if((xo[row]==undefined || xo[row][col-2]==undefined) && xo[row]!=undefined && xo[row][col-1]!=undefined && xo[row][col-1]=="x")
                        {
                            return Array(row,2);
                        }
                    }


                    if(row==0)
                    {
                        if((xo[row+1]==undefined || xo[row+1][col]==undefined) && xo[row+2]!=undefined && xo[row+2][col]!=undefined && xo[row+2][col]=="x")
                        {
                            return Array(1,col);
                        }
                        else if((xo[row+2]==undefined || xo[row+2][col]==undefined) && xo[row+1]!=undefined && xo[row+1][col]!=undefined && xo[row+1][col]=="x")
                        {
                            return Array(2,col);
                        }
                    }
                    else if(row==1)
                    {
                        if((xo[row-1]==undefined || xo[row-1][col]==undefined) && xo[row+1]!=undefined && xo[row+1][col]!=undefined && xo[row+1][col]=="x")
                        {
                            return Array(0,col);
                        }
                        else if((xo[row+1]==undefined || xo[row+1][col]==undefined) && xo[row-1]!=undefined && xo[row-1][col]!=undefined && xo[row-1][col]=="x")
                        {
                            return Array(2,col);
                        }
                    }
                    else if(row==2)
                    {
                        if((xo[row-1]==undefined || xo[row-1][col]==undefined) && xo[row-2]!=undefined && xo[row-2][col]!=undefined && xo[row-2][col]=="x")
                        {
                            return Array(1,col);
                        }
                        else if((xo[row-2]==undefined || xo[row-2][col]==undefined) && xo[row-1]!=undefined && xo[row-1][col]!=undefined && xo[row-1][col]=="x")
                        {
                            return Array(2,col);
                        }
                    }
                    if(row==0 && col==0)
                    {
                        if((xo[1]==undefined || xo[1][1]==undefined) && xo[2]!=undefined && xo[2][2]!=undefined && xo[2][2]=="x")
                        {
                            return Array(1,1);
                        }
                        else if((xo[2]==undefined || xo[2][2]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]=="x")
                        {
                            return Array(2,2);
                        }
                    }
                    else if(row==0 && col==2)
                    {
                        if((xo[1]==undefined || xo[1][1]==undefined) && xo[2]!=undefined && xo[2][0]!=undefined && xo[2][0]=="x")
                        {
                            return Array(1,1);
                        }
                        else if((xo[2]==undefined || xo[2][0]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]=="x")
                        {
                            return Array(2,0);
                        }
                    }
                    else if(row==2 && col==0)
                    {
                        if((xo[1]==undefined || xo[1][1]==undefined) && xo[0]!=undefined && xo[0][2]!=undefined && xo[0][2]=="x")
                        {
                            return Array(1,1);
                        }
                        else if((xo[0]==undefined || xo[0][2]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]=="x")
                        {
                            return Array(0,2);
                        }
                    }
                    else if(row==2 && col==2)
                    {
                        if((xo[1]==undefined || xo[1][1]==undefined) && xo[0]!=undefined && xo[0][0]!=undefined && xo[0][0]=="x")
                        {
                            return Array(1,1);
                        }
                        else if((xo[0]==undefined || xo[0][0]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]=="x")
                        {
                            return Array(0,0);
                        }
                    }
                    else if(row==1 && col==1)
                    {
                        if((xo[2]==undefined || xo[2][2]==undefined) && xo[0]!=undefined && xo[0][0]!=undefined && xo[0][0]=="x")
                        {
                            return Array(2,2);
                        }
                        else if((xo[0]==undefined || xo[0][0]==undefined) && xo[2]!=undefined && xo[2][2]!=undefined && xo[2][2]=="x")
                        {
                            return Array(0,0);
                        }
                        else if((xo[0]==undefined || xo[0][2]==undefined) && xo[2]!=undefined && xo[2][0]!=undefined && xo[2][0]=="x")
                        {
                            return Array(0,2);
                        }
                        else if((xo[2]==undefined || xo[2][0]==undefined) && xo[0]!=undefined && xo[0][2]!=undefined && xo[0][2]=="x")
                        {
                            return Array(2,0);
                        }
                    }
                }
            }
       }
     }
     return false;
}
function getRandomOne(xo)
{
    if(xo[1]==undefined || xo[1][1]==undefined)
    {
        return Array(1,1);
    }
    for (var row = 0; row < 3; row++)
    {
        for(var col=0;col<3;col++)
        {
            if(xo[row][col]==undefined)
            {
                return Array(row,col);
            }
        }
    }
       
    
}

function checkWinenr(xo,pos,type)
{
    col=pos[1];
    row=pos[0];
    if(col==0)
    {
        if( xo[row]!=undefined && xo[row][col+2]!=undefined && xo[row][col+2]==type && xo[row]!=undefined && xo[row][1]!=undefined && xo[row][1]==type)
        {
            return true
        }
        else if((xo[row]==undefined || xo[row][col+2]==undefined) && xo[row]!=undefined && xo[row][col+1]!=undefined && xo[row][col+1]==type && xo[row]!=undefined && xo[row][2]!=undefined && xo[row][2]==type)
        {
            return true;
        }
    }
    else if(col==1)
    {
        if( xo[row]!=undefined && xo[row][col+1]!=undefined && xo[row][col+1]==type && xo[row]!=undefined && xo[row][0]!=undefined && xo[row][0]==type)
        {
            return true
        }
        else if((xo[row]==undefined || xo[row][col+1]==undefined) && xo[row]!=undefined  && xo[row][col-1]!=undefined && xo[row][col-1]==type && xo[row]!=undefined && xo[row][2]!=undefined && xo[row][2]==type)
        {
            return true
        }
    }
    else if(col==2)
    {
        if(xo[row]!=undefined && xo[row][col-2]!=undefined && xo[row][col-2]==type && xo[row]!=undefined && xo[row][1]!=undefined && xo[row][1]==type)
        {
            return true;
        }
        else if( xo[row]!=undefined && xo[row][col-1]!=undefined && xo[row][col-1]==type && xo[row]!=undefined && xo[row][2]!=undefined && xo[row][2]==type)
        {
            return true
        }
    }


    if(row==0)
    {
        if( xo[row+2]!=undefined && xo[row+2][col]!=undefined && xo[row+2][col]==type && xo[1]!=undefined && xo[1][col]!=undefined && xo[1][col]==type)
        {
            return true;
        }
        else if(xo[row+1]!=undefined && xo[row+1][col]!=undefined && xo[row+1][col]==type && xo[2]!=undefined && xo[2][col]!=undefined && xo[2][col]==type)
        {
            return true;
        }
    }
    else if(row==1)
    {
        if(xo[row+1]!=undefined && xo[row+1][col]!=undefined && xo[row+1][col]==type && xo[0]!=undefined && xo[0][col]!=undefined && xo[0][col]==type)
        {
            return true;
        }
        else if((xo[row+1]==undefined || xo[row+1][col]==undefined) && xo[row-1]!=undefined && xo[row-1][col]!=undefined && xo[row-1][col]==type && xo[2]!=undefined && xo[2][col]!=undefined && xo[2][col]==type)
        {
            return true;
        }
    }
    else if(row==2)
    {
        if( xo[row-2]!=undefined && xo[row-2][col]!=undefined && xo[row-2][col]==type && xo[1]!=undefined && xo[1][col]!=undefined && xo[1][col]==type)
        {
            return true;
        }
        else if((xo[row-2]==undefined || xo[row-2][col]==undefined) && xo[row-1]!=undefined && xo[row-1][col]!=undefined && xo[row-1][col]==type && xo[2]!=undefined && xo[2][col]!=undefined && xo[2][col]==type)
        {
            return true;
        }
    }
    if(row==0 && col==0)
    {
        if(xo[2]!=undefined && xo[2][2]!=undefined && xo[2][2]==type && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]==type)
        {
            return true;
        }
        else if( xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]==type && xo[2]!=undefined && xo[1][2]!=undefined && xo[1][2]==type)
        {
            return true;
        }
    }
    else if(row==0 && col==2)
    {
        if( xo[2]!=undefined && xo[2][0]!=undefined && xo[2][0]==type && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]==type)
        {
            return true;
        }
        else if((xo[2]==undefined || xo[2][0]==undefined) && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]==type && xo[2]!=undefined && xo[2][0]!=undefined && xo[2][0]==type)
        {
            return true;
        }
    }
    else if(row==2 && col==0)
    {
        if( xo[0]!=undefined && xo[0][2]!=undefined && xo[0][2]==type && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]==type)
        {
            return true;
        }
        else if( xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]==type && xo[0]!=undefined && xo[0][2]!=undefined && xo[0][2]==type)
        {
            return true;
        }
    }
    else if(row==2 && col==2)
    {
        if( xo[0]!=undefined && xo[0][0]!=undefined && xo[0][0]==type && xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]==type)
        {
            return true;
        }
        else if(xo[1]!=undefined && xo[1][1]!=undefined && xo[1][1]==type && xo[0]!=undefined && xo[0][0]!=undefined && xo[0][0]==type)
        {
            return true;
        }
    }
    else if(row==1 && col==1)
    {
        if(xo[0]!=undefined && xo[0][0]!=undefined && xo[0][0]==type && xo[2]!=undefined && xo[2][2]!=undefined && xo[2][2]==type)
        {
            return true;
        }
        else if( xo[2]!=undefined && xo[2][2]!=undefined && xo[2][2]==type && xo[0]!=undefined && xo[0][0]!=undefined && xo[0][0]==type)
        {
            return true;
        }
        else if( xo[2]!=undefined && xo[2][0]!=undefined && xo[2][0]==type && xo[0]!=undefined && xo[0][2]!=undefined && xo[0][2]==type)
        {
            return true;
        }
        else if(xo[0]!=undefined && xo[0][2]!=undefined && xo[0][2]==type && xo[2]!=undefined && xo[2][0]!=undefined && xo[2][0]==type)
        {
            return true;
        }
    }  
    return false;  
}