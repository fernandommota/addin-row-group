/** start addIn rowGroup **/
 var rowGroup = {
    name: "rowGroup",
    
    label: "rowGroup",
    
    defaults: {
        decimal: true,
		textFormat: function(v, st, opt, td) {		
		    if($(td).attr("display")!='none'){
                
                var row = st.rowIdx + 1;
                var countRows = 1;
               
                
                while(st.tableData[row][st.colIdx] == v && row < st.rawData.resultset.length-1){                 
                    var nextTd = $('#tabela_funcaoTable tbody tr').eq(row).find('td:eq('+st.colIdx+')')[0];
                    if(nextTd){
                        $(nextTd).css('display','none'); //remove();     
                        $(nextTd).attr('display','none');
                    }
                    row++;
                    countRows++;
                }
                
                //verify last row
                if(st.tableData[row][st.colIdx] == v){
                    var nextTd = $('#tabela_funcaoTable tbody tr').eq(row).find('td:eq('+st.colIdx+')')[0];
                    if(nextTd){
                        $(nextTd).css('display','none'); //remove();     
                        $(nextTd).attr('display','none');
                        countRows++;
                    }
                }                
                
                $(td).attr( "rowspan", countRows);                
            }
			return v;		
		}
    },
    
    init: function(){
      $.fn.dataTableExt.oSort[this.name+'-asc'] = $.fn.dataTableExt.oSort['numeric-asc'];
      $.fn.dataTableExt.oSort[this.name+'-desc'] = $.fn.dataTableExt.oSort['numeric-desc'];
    },
    
    implementation: function(tgt, st, opt){
      var text = opt.textFormat.call(this, st.value, st, opt, tgt);
      $(tgt).empty().append("<span style='text-align:right;'>"+text+"</span>");
    }
    
  };
  Dashboards.registerAddIn("Table", "colType", new AddIn(rowGroup));
/** end addIn rowGroup **/ 