let result = confirm("Seem to be a hacker by instantly clicking random letter/number keys on your keyboard with the HackIt site!");

var colorArray = ['#00022e','#373e02','#420303','#1B1811','black','#3B2F2F','pink','beige','white'];
var i = 0;
function changeColo(){
    document.body.style.background = colorArray[i];
    let b7 = document.getElementById("b7");
    b7.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }

}

var fontArray = ['Arial','Lucida Sans','Helvetica', 'Courier New', 'Georgia'];
var j = 0;
function changeFont(){
    let b1 = document.getElementById("b1");
    b1.style.fontFamily = fontArray[j];
    let b2 = document.getElementById("b2");
    b2.style.fontFamily= fontArray[j];
    let b3 = document.getElementById("b3");
    b3.style.fontFamily = fontArray[j];
    let b4 = document.getElementById("b4");
    b4.style.fontFamily = fontArray[j];
    let b5 = document.getElementById("b5");
    b5.style.fontFamily = fontArray[j];
    let b6 = document.getElementById("b6");
    b6.style.fontFamily = fontArray[j];
    document.body.style.fontFamily = fontArray[j];
    j++;
    if( j >= fontArray.length) {
        j= 0;
    }

}


var fontStyleArray = ['Italic','Normal'];
var k = 0;
function changeFontStyle(){
    let b1 = document.getElementById("b1");
    b1.style.fontStyle = fontStyleArray[k];
    let b2 = document.getElementById("b2");
    b2.style.fontStyle = fontStyleArray[k];
    let b3 = document.getElementById("b3");
    b3.style.fontStyle = fontStyleArray[k];
    let b4 = document.getElementById("b4");
    b4.style.fontStyle = fontStyleArray[k];
    let b5 = document.getElementById("b5");
    b5.style.fontStyle = fontStyleArray[k];
    let b6 = document.getElementById("b6");
    b6.style.fontFamily = fontArray[k]
    document.body.style.fontStyle = fontStyleArray[k];
    k++;
    if( k >= fontStyleArray.length) {
        k= 0;
    }

}

var fontColorArray = ['#dfff11','#ff000d','#ff3503','#ff0055','#1B1811','#39ff14','beige','white','black'];
var h = 0;
function changeFontColor(){
    let b1 = document.getElementById("b1");
    b1.style.color = fontColorArray[h];
    let b2 = document.getElementById("b2");
    b2.style.color = fontColorArray[h];
    let b3 = document.getElementById("b3");
    b3.style.color = fontColorArray[h];
    let b4 = document.getElementById("b4");
    b4.style.color = fontColorArray[h];
    let b5 = document.getElementById("b5");
    b5.style.color = fontColorArray[h];
    let b6 = document.getElementById("b6");
    b6.style.color = fontColorArray[h];
    
    document.body.style.color = fontColorArray[h];
    h++;
    if( h >= colorArray.length) {
        h = 0;
    }

}



function about_go(){
    window.location.href = "about.html"
    }



document.onkeyup = myclick;
let w=0;
var str = "import ast \n import uuid \n import datetime \n import pprint \n import serpent \n \n class DemoClass: \n  def __init__(self): \n \n self.i=42 \nself.b=False \n data = {} \n 2**200, 'colorset': { 'red', 'green' },'id': uuid.uuid4(),\n 'timestamp': datetime.datetime.now(),\n 'class': DemoClass(),\n 'unicode': '€ \n } \n # serialize it \n ser = serpent.dumps(data, indent=True) \n open('data.serpent', 'wb').write(ser) \n print('Serialized form:') \n print(ser.decode('utf-8')) \n # read it back \n data = serpent.load(open('data.serpent', 'rb')) \n print('Data:') \npprint.pprint(data) \n \n # you can also use ast.literal_eval if you like \n ser_string = open('data.serpent', 'r', encoding='utf-8').read() \n data2 = ast.literal_eval(ser_string) \n \nassert data2==data \n f __name__ == '__main__': backuprunning = True \n This will check if the backup script is running. \n If it is, it will sleep for 1 min \n Else, it will begin the multipart upload to S3 \n while backuprunning: \n logger.info('Checking if backup shell script is running') \n if checkIfProcessRunning('/root/physical_backup.sh'): \n logger.info('Backup shell script still running. Sleeping for 60s') \n sleep(60) \n else: \n backuprunning = False \n logger.info('Beginning multipart upload of ' + file_name) \n multi_part_upload() \n  \n # CODE DOESN'T EXECUTE AFTER THIS \n  \n objects = list(bucket.objects.filter(Prefix='physical_db_backups/')) \n objects.sort(key=lambda x: x.last_modified) \n key = objects[1].key\n    logger.info('Found oldest key, ' + key + '. Deleting now...')  \n s3.Object('s3-backup', key).delete() \n    logger.info('Removed oldest key: ' + key) \n    sendslackmessage('Removed oldest key:'+ key) \n \n S3 Object Rotation','success')"
function myclick(){
    document.querySelector('.out').innerHTML += str.slice(w,w+4);
    w+=4;
}
   
        




