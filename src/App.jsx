import React, { useState, useEffect } from "react";

// ─── HARDCODED INITIAL STUDENTS DATA (150 STUDENTS) ─────────────────────────
const INITIAL_STUDENTS = [
  { id: "23FE1A05L6", name: "SHAIK NAJIYA SANOBER", email: "shaiknajiyasanober158@gmail.com" },
  { id: "23FE1A05C3", name: "MARADANI KEERTHI VYSHNAVI", email: "keerthi010506@gmail.com" },
  { id: "24FE5A0515", name: "NIDAMANURI VAMSI", email: "vamsia585@gmail.com" },
  { id: "23FE1A6107", name: "BHAVANAM RAHUL", email: "bhavanamrahul16@gmail.com" },
  { id: "23FE1A05J6", name: "RAVULAPALLI AJAY KUMAR", email: "ajayravulapalli.555@gmail.com" },
  { id: "23FE1A1241", name: "POREDDY NAGA VARSHITHA", email: "varshithakrishnareddy2016@gmail.com" },
  { id: "23FE1A6142", name: "POLIMERA JAYA SAI JASWANTH", email: "jayasaijaswanthp@gmail.com" },
  { id: "23FE1A1222", name: "KANCHETI CHETHANA LAKSHMI", email: "chethanalakshmi13@gmail.com" },
  { id: "23FE1A4417", name: "GUNTAKA PRANAV NADH REDDY", email: "pranavnadh6@gmail.com" },
  { id: "23FE1A4427", name: "KOLIKI JHANSI", email: "kolikijhansi181@gmail.com" },
  { id: "23FE1A4444", name: "RAPURU VARSHINI", email: "rapurvarshini2964@gmail.com" },
  { id: "23FE1A05L0", name: "SHAIK BALA KHASIM BEE", email: "khasimbee2606@gmail.com" },
  { id: "23FE1A05L7", name: "SHAIK NAZIYA", email: "naziyashaik05l7@gmail.com" },
  { id: "23FE1A4423", name: "KANKIPATI VENKATA KRISHNA SATWIK", email: "satwik.kankipati@gmail.com" },
  { id: "23FE1A05J2", name: "RAMARAJU NAGA ESWARA SRAVAN", email: "sravantatikonda123@gmail.com" },
  { id: "23FE1A1242", name: "POSINA VARNITHA", email: "varnithaposina@gmail.com" },
  { id: "23FE1A4450", name: "SHAIK SAAJITH", email: "saajithmkks36@gmail.com" },
  { id: "23FE1A1210", name: "DANABOINA HARI KRISHNA YADAV", email: "krishnahariyadav440@gmail.com" },
  { id: "23FE1A4419", name: "JILLELAMUDI NAGA SRI VIDHYA", email: "vidhyajillelamudi346@gmail.com" },
  { id: "23FE1A4422", name: "KANDIMALLA JYOTHI LAKSHMI", email: "jyothikandimalla6@gmail.com" },
  { id: "23FE1A4435", name: "NALLA SAI CHARAN", email: "charannalla07@gmail.com" },
  { id: "23FE1A05D0", name: "MODALAVALASA RAVI KIRAN", email: "ravikiranmodalavalasa@gmail.com" },
  { id: "23FE1A05D6", name: "MOLLETI SRAVANI", email: "molletisravani27@gmail.com" },
  { id: "24FE5A6102", name: "DIVI SUKUMAR", email: "divisukumar005@gmail.com" },
  { id: "23FE1A4434", name: "MEDURI PREM SAI", email: "mpremsai147@gmail.com" },
  { id: "23FE1A0520", name: "BITRA NAVADEEP", email: "inavadeep1205@gmail.com" },
  { id: "23FE1A0486", name: "MALLEBOYINA HARSHA VARDHAN", email: "malleboyinasunny29@gmail.com" },
  { id: "23FE1A4258", name: "TALASILA DIVYA HARI PRAKASH", email: "hariprakashtalasila5@gmail.com" },
  { id: "23FE1A0545", name: "DASINENI HEMANTH", email: "hemanthdasineni6@gmail.com" },
  { id: "24FE5A6104", name: "MUTTE SAI RAJESH", email: "muttesairajesh@gmail.com" },
  { id: "23FE1A4462", name: "YALLAMATI SANNIDHI", email: "sannidhiyallamati462@gmail.com" },
  { id: "23FE1A05P1", name: "SHAIK SABIHA SULTANA", email: "shaiksabihasultana55@gmail.com" },
  { id: "23FE1A6157", name: "TATA LAKSHMI VENKATA GAYATHRI", email: "tatagayathri39@gmail.com" },
  { id: "24FE5A0524", name: "VAVILAPALLI TARUN KUMAR", email: "vavilapallitarun32@gmail.com" },
  { id: "23FE1A0489", name: "MANDULA MOUNIKA", email: "mounikamandula2005@gmail.com" },
  { id: "23FE1A4402", name: "AMISIGADDA KOHITHA", email: "amisigaddakohitha@gmail.com" },
  { id: "23FE1A4433", name: "MATURU LOKESH", email: "maturulokesh18@gmail.com" },
  { id: "23FE1A0518", name: "BHUPATHI NAGA LIKITH", email: "bnagalikith12@gmail.com" },
  { id: "23FE1A0561", name: "GANDIKOTA SACHIN", email: "gandikotasachin@gmail.com" },
  { id: "23FE1A05B0", name: "MADDINA SRAVANTHI", email: "sravanthimaddina42@gmail.com" },
  { id: "24FE5A4205", name: "SHAIK SAMEER", email: "shaiksameer3638@gmail.com" },
  { id: "23FE1A0519", name: "BIKKI SRINIVAS", email: "bikkisrinivas19@gmail.com" },
  { id: "23FE1A4412", name: "DANDEMPALLI SHRUTHI", email: "shruthidandempalli@gmail.com" },
  { id: "23FE1A4214", name: "DAGGUBATI DEEPTHI SAI", email: "deepthisaidaggubati@gmail.com" },
  { id: "23FE1A6109", name: "BODDU NARENDRA", email: "boddunarendra196@gmail.com" },
  { id: "23FE1A05O1", name: "YALLA VYSHNAVI", email: "yallavyshnavi@gmail.com" },
  { id: "23FE1A4401", name: "AKKALA SAI NARAYANA", email: "saiakkala2006@gmail.com" },
  { id: "23FE1A0536", name: "CHINTA MANASA", email: "chintamanasa294@gmail.com" },
  { id: "23FE1A0558", name: "GAJULAVARTHI KALYAN RAO", email: "kalyanrao135@gmail.com" },
  { id: "23FE1A05C4", name: "MATTUPALLI DEVI SRAVANI", email: "devisravanimattupalli@gmail.com" },
  { id: "24FE5A0516", name: "PADAMATI DALL SAI KEERTHI", email: "keerthipadamati50@gmail.com" },
  { id: "23FE1A6122", name: "JAKKA VASANTHIKA", email: "jvasanthika@gmail.com" },
  { id: "24FE5A4201", name: "ATLURI VENKATA SIVA REDDY", email: "venkatshiva823@gmail.com" },
  { id: "23FE1A05A9", name: "MACHARLA SOWMYA", email: "sowmyamacharla21@gmail.com" },
  { id: "23FE1A6118", name: "ENAGANTI FIROZ BABU", email: "babufiroz879@gmail.com" },
  { id: "23FE1A4403", name: "ANIMELLA KARTHIKEYA GIRINDRA", email: "animellakarthikeyagirindra@gmail.com" },
  { id: "23FE1A4430", name: "KURAPATI BHARGAVI", email: "kurapati608@gmail.com" },
  { id: "23FE1A4235", name: "MADDELA SIR JAMES YUVARAJU", email: "jamesyuvaraj27@gmail.com" },
  { id: "23FE1A0480", name: "KROVI LAXMI NAGA SRAVANI", email: "klnsravani06@gmail.com" },
  { id: "23FE1A6162", name: "YARLAGADDA NAGA SRUTHI", email: "sruthiyarlagadda988@gmail.com" },
  { id: "23FE1A1235", name: "NOORBASHA BAJI", email: "bajinoorbasha961@gmail.com" },
  { id: "23FE1A4221", name: "GARNEPUDI TEJASWI", email: "tejaswigarnepudi85@gmail.com" },
  { id: "23FE1A0503", name: "AKURATHI LEELAVENKATESH", email: "leelavenkateshakurathi@gmail.com" },
  { id: "23FE1A0538", name: "CHIRAKAALA VENKATA SAI MANIKANTA", email: "saimani0710@gmail.com" },
  { id: "23FE1A0496", name: "MOHAMMAD SANIYA", email: "mohammadsaira123@gmail.com" },
  { id: "23FE1A04A2", name: "NAGUMOTHU PRAGATHI", email: "pragathinagumothu5@gmail.com" },
  { id: "23FE1A6124", name: "KARA DIVYA SREELEKHA", email: "divyasreelekha777@gmail.com" },
  { id: "23FE1A05O4", name: "YARRA VIVEK", email: "vivekyarra567@gmail.com" },
  { id: "23FE1A1252", name: "SHAIK TABASSUM", email: "vignanlara1252@gmail.com" },
  { id: "23FE1A0460", name: "JAMPANI VAISHNAVI", email: "jampanivaishnavii@gmail.com" },
  { id: "23FE1A6150", name: "SHAIK AHMAD ALI", email: "shailkahamadali3773@gmail.com" },
  { id: "23FE1A6154", name: "SHAIK SAJIDA", email: "haiksajida7234@gmail.com" },
  { id: "23FE1A4406", name: "BANAVATH DEEPIKA BAI", email: "deepikabanavath.06@gmail.com" },
  { id: "23FE1A4440", name: "PENUGONDA DHARSHAN BABU", email: "dharshanpenugonda8374@gmail.com" },
  { id: "23FE1A0585", name: "KALLURI ROHITHA", email: "rohithakalluri79@gmail.com" },
  { id: "23FE1A05G6", name: "PALETI VENKATA MURALI KRISHNA", email: "pvmuralikrishna481141@gmail.com" },
  { id: "23FE1A1208", name: "BORA ARCHANA", email: "archanabora607@gmail.com" },
  { id: "24FE5A1202", name: "GUNTUR HARIKA", email: "harikaguntur22@gmail.com" },
  { id: "23FE1A6152", name: "SHAIK MUBEENA", email: "shaikmubeena.aiml@gmail.com" },
  { id: "23FE1A05I8", name: "PULAVARTHI VENKAT PRAKASH", email: "pvenky2005@gmail.com" },
  { id: "23FE1A05N3", name: "VALETI NARASIMHA NAIDU", email: "narasimha9383@gmail.com" },
  { id: "24FE5A1205", name: "NAGIREDDI ABHINAY", email: "abhinay891984@gmail.com" },
  { id: "23FE1A4254", name: "SHAIK TAMEEZ", email: "tameezshaik516@gmail.com" },
  { id: "23FE1A05A6", name: "KOTULA KUMAR MANIKANTA", email: "manikantakumar429@gmail.com" },
  { id: "23FE1A05K5", name: "SAYAMPU ANUSHA", email: "sayampuanusha@gmail.com" },
  { id: "23FE1A05K9", name: "SHAIK AYESHA FARHEEN", email: "ayeshu49555@gmail.com" },
  { id: "23FE1A0586", name: "KAMINENI NAGA HARINI", email: "kamineninagaharini2006@gmail.com" },
  { id: "23FE1A0482", name: "MADAMANCHI VIVEK", email: "madamanchivivek16@gmail.com" },
  { id: "23FE1A4463", name: "YASAM GEETHIKA", email: "geethikayasam2005@gmail.com" },
  { id: "23FE1A05A1", name: "KONDRU NAGESWARI", email: "kondrunageswari24@gmail.com" },
  { id: "24FE5A0513", name: "MENDU NAGA BHARGAVI", email: "nagabhargavimendunagabhargavi@gmail.com" },
  { id: "23FE1A6104", name: "BANDARU JAYA SAI SHANMUKH", email: "shanmukhbandaru.b@gmail.com" },
  { id: "23FE1A4458", name: "VELLANKI NAGA REVANTH", email: "vellankinagarevanth@gmail.com" },
  { id: "23FE1A4212", name: "CHINTHALACHERUVU VENKATA NARENDRA", email: "narendrareddych181@gmail.com" },
  { id: "23FE1A4219", name: "GALLA LAKSHMI PAVITHRA", email: "gallasaipavitra@gmail.com" },
  { id: "23FE1A4229", name: "KASUKURTHI SNEHA MADHURI", email: "snehhaa17@gmail.com" },
  { id: "23FE1A0573", name: "ISSARAPU TARUNA SRAVANTHI", email: "issarapusravanthi@gmail.com" },
  { id: "23FE1A0493", name: "MEDIKONDA MANASA RANI", email: "manasamedikonda22@gmail.com" },
  { id: "23FE1A6161", name: "VEMULURU DEVA RAJ", email: "vemulurudevaraj@gmail.com" },
  { id: "23FE1A0543", name: "DASARI MANJULA", email: "manjuladasari9286@gmail.com" },
  { id: "23FE1A1262", name: "V L SATYA SAI SUBRAMANYESWARI", email: "lakshmisatyasai385@gmail.com" },
  { id: "23FE1A4414", name: "EDIGA ASHOK", email: "ashokashokgoud462@gmail.com" },
  { id: "24FE5A0518", name: "SHAIK ARIF", email: "as0476220@gmail.com" },
  { id: "23FE1A4222", name: "GOGINENI SINDHURA DEVI", email: "sindhuradevi7@gmail.com" },
  { id: "23FE1A4260", name: "VALAPARLA LISA CHRISTINE", email: "lisachristinevalaparla@gmail.com" },
  { id: "24FE5A0517", name: "PAVULURI MADHAVI LATHA", email: "vyshupavuluri@gmail.com" },
  { id: "23FE1A1237", name: "PAGADALA ISHWARYA", email: "ishwaryapagadala131@gmail.com" },
  { id: "23FE1A6130", name: "LAVU NAGA DIVYA", email: "nagadivya0826@gmail.com" },
  { id: "24FE5A0519", name: "SHAIK JASMIN", email: "jasminshaik9703@gmail.com" },
  { id: "23FE1A05K0", name: "RUDRAPOGU CRISPY DONY", email: "crispydony0912@gmail.com" },
  { id: "23FE1A1221", name: "KALIKAYA VARSHINI", email: "kalikayavarshini99@gmail.com" },
  { id: "23FE1A4411", name: "CHITTIBOYINA SRI HARI PRANAV", email: "chittiboyinasriharipranav@gmail.com" },
  { id: "23FE1A4420", name: "JONNADULA GOWTHAM KUMAR", email: "gowthamkumarjonnadula@gmail.com" },
  { id: "23FE1A0479", name: "KOVVURU DAMAYANTHI", email: "damayanthiyanthi811@gmail.com" },
  { id: "23FE1A4410", name: "CHALLAGUNDLA MADHURI", email: "madhurichallagundla7@gmail.com" },
  { id: "23FE1A0534", name: "CHINNABATHINI RAVI TEJA", email: "ravitejachinnabathini7@gmail.com" },
  { id: "23FE1A0553", name: "ELURI VENKATESH", email: "nagarajueluri038@gmail.com" },
  { id: "23FE1A05C0", name: "MALLEPULA NAMRATHA", email: "mnamratha046@gmail.com" },
  { id: "23FE1A05I9", name: "PUVVADI KEERTHI", email: "keerthipuvvadi12@gmail.com" },
  { id: "23FE1A05E2", name: "MUNAGA BHAVANA", email: "munagabhavana.04@gmail.com" },
  { id: "23FE1A05N9", name: "VENNA SUMITHRA DEVI", email: "sumithradevivenna7@gmail.com" },
  { id: "23FE1A05G8", name: "PARVATHAREDDY POOJA", email: "appr.1320@gmail.com" },
  { id: "23FE1A05I2", name: "PONNURU JAYASRI", email: "jayasriponnur@gmail.com" },
  { id: "23FE1A05C8", name: "MIDDEY LEELA SAI", email: "middeysai25@gmail.com" },
  { id: "23FE1A05D5", name: "MOHAMMAD AYESHA", email: "mdayesha7863@gmail.com" },
  { id: "23FE1A0594", name: "KESIREDDY VENKATA GREESHMA REDDY", email: "kesireddygreeshma@gmail.com" },
  { id: "23FE1A05O5", name: "YARRAM SRI KEERTHI", email: "srikeerthiyarram@gmail.com" },
  { id: "23FE1A05N8", name: "VASIREDDY VIHARIKA", email: "viharikavasireddy07@gmail.com" },
  { id: "23FE1A05O8", name: "SATHULURI V S S KEERTHANA SARVANI", email: "sarvanisathuluri799@gmail.com" },
  { id: "24FE5A0521", name: "SIVARATRI VENKATARAMANA", email: "venkataramanasivaratri322@gmail.com" },
  { id: "23FE1A04H8", name: "VALLAMKONDA DHANYARA SRI LALITHA", email: "lalithasivavallamkonda@gmail.com" },
  { id: "23FE1A4351", name: "SHAIK SHAMEEM AKTHER", email: "shameem.shaik0501@gmail.com" },
  { id: "23FE1A4324", name: "KODURU JAGADEESH BABU", email: "kodurujagadeeshbabu77@gmail.com" },
  { id: "23FE1A4350", name: "SHAIK.NAZEER", email: "sknazeer9398850146@gmail.com" },
  { id: "23FE1A04F2", name: "SINGAMSETTY KOWSHIK", email: "kowshik2866@gmail.com" },
  { id: "23FE1A05B4", name: "MADINI MNV SAI SIDDHARTHA", email: "siddharthmadini2811@gmail.com" },
  { id: "23FE1A0556", name: "GADIBIDI ALEKHYA", email: "gadibidialekhya119@gmail.com" },
  { id: "23FE1A0533", name: "CHILAKA PRAVEEN KUMAR", email: "chilakapraveen2005@gmail.com" },
  { id: "23FE1A0424", name: "BYREDDY SUDHEER REDDY", email: "reddy19sudheer@gmail.com" },
  { id: "24FE5A0523", name: "UPPU PRAVALLIKA", email: "pravallikauppu1128@gmail.com" },
  { id: "23FE1A04E6", name: "SHAIK MEHATHAZ", email: "mehatahazshaik@gmail.com" },
  { id: "23FE1A4216", name: "EEDE NIKHILA", email: "nikhilaeede@gmail.com" },
  { id: "23FE1A1243", name: "Potla Vasavi Durga", email: "vasavidurgapotla@gmail.com" },
  { id: "23FE1A1240", name: "Podili Sri Sai Latha", email: "podhilisrisailatha@gmail.com" },
  { id: "23FE1A04G7", name: "TURLAPATI TORAJA ANAGHA SRINIDHI", email: "anaghasrinidhiturlapati@gmail.com" },
  { id: "23FE1A4328", name: "KUNCHALA SRINADH", email: "srinadkunchala@gmail.com" },
  { id: "23FE1A4257", name: "SIVANI MENDU", email: "sivaani237@gmail.com" },
  { id: "23FE1A4255", name: "SIMHADRI VEERA VENKATA LAKSHMI GOWRI", email: "gowrisimhadri10@gmail.com" },
  { id: "23FE1A4220", name: "GANTA VENNELA", email: "vennelaganta356@gmail.com" },
  { id: "23FE1A4353", name: "SYED SAJIDA SULTHANA", email: "sajidasyed83828@gmail.com" },
   { id: "80", name: "Veerababu", email: "veerababu@gmail.com" },
  { id: "23FE1A0401", name: "AARUMALLA SRIJA", email: "srijaaarumalla@gmail.com" },
  { id: "23FE1A0402", name: "ABU FAISAL SHAIK", email: "faisalshaik3105@gmail.com" },
  { id: "23FE1A0403", name: "AKKALA YOSHITA", email: "akkalayoshita@gmail.com" },
  { id: "23FE1A0404", name: "ANDRA DIVYA", email: "andradivya24@gmail.com" },
  { id: "23FE1A0405", name: "ANKAM DEEPIKA", email: "ankamkavya2@gmail.com" },
  { id: "23FE1A0406", name: "ANNAM NIHARIKA", email: "a.niharika414@gmail.com" },
  { id: "23FE1A0407", name: "ARE SERENA", email: "areserena9@gmail.com" },
  { id: "23FE1A0408", name: "BAIREDDY VENKATA SIVA MAHANANDI REDDY", email: "baireddymahanandireddy@gmail.com" },
  { id: "23FE1A0409", name: "BELLAPU SIVA PHANI HARSHINI", email: "harshinisam49@gmail.com" },
  { id: "23FE1A0410", name: "BALLEMKONDA RAJYA LAKSHMI", email: "rajyalakshmi7817@gmail.com" },
  { id: "23FE1A0411", name: "BANAVATHU DURGA PRASAD NAIK", email: "durgaprasadnaikbanavathu@gmail.com" },
  { id: "23FE1A0412", name: "BANDARI LAVANYA", email: "bandarulavanya04@gmail.com" },
  { id: "23FE1A0413", name: "BATTULA MOUNIKA", email: "mounikabattula01@gmail.com" },
  { id: "23FE1A0414", name: "BELLAMKONDA KUMAR KOTIVEERA VENKATA GOPI", email: "gopikumar9652@gmail.com" },
  { id: "23FE1A0415", name: "BHAVANAM SAMBI REDDY", email: "bhavanamsambireddy05@gmail.com" },
  { id: "23FE1A0416", name: "BHIMAVARAPU BHARATI CHANDRIKA", email: "bharatichandrika3@gmail.com" },
  { id: "23FE1A0417", name: "BHUPATHI ROHITH BABU", email: "brohithbabu2005@gmail.com" },
  { id: "23FE1A0418", name: "BHUVANAGIRI KEERTHIKA", email: "keerthikabhuvanagiri8@gmail.com" },
  { id: "23FE1A0419", name: "BHUVANAGIRI VENKATESH", email: "bhuvanagirivenkatesh81@gmail.com" },
  { id: "23FE1A0420", name: "AMPALAM ESWAR CHANDRA VIDYA SAGAR", email: "aecvsagar5@gmail.com" },
  { id: "23FE1A0421", name: "BODDU SRI VIDYA", email: "srividyachowdary3333@gmail.com" },
  { id: "23FE1A0422", name: "BONTHU SUMASRI", email: "bonthusumasri@gmail.com" },
  { id: "23FE1A0423", name: "BURRA RATNA MOHAN", email: "burraratnamohan@gmail.com" },
  { id: "23FE1A0425", name: "CHALAVADI HEMA HARSHINI", email: "chalavadihemaharshini@gmail.com" },
  { id: "23FE1A0426", name: "CHALLAGUNDLA SAI SANJAY", email: "sanjaychallagundla6@gmail.com" },
  { id: "23FE1A0427", name: "CHEBROLU KIRAN KUMAR", email: "kirankumarchebrolu97@gmail.com" },
  { id: "23FE1A0428", name: "CHENNU SUBRAMANYAM", email: "venkatchennu09@gmail.com" },
  { id: "23FE1A0429", name: "BILLALA JAYASRI", email: "billalajayasri@gmail.com" },
  { id: "23FE1A0430", name: "CHIRUKURI RAGHU CHANDU", email: "chirukuriraghuchandu@gmail.com" },
  { id: "23FE1A0431", name: "DANDA HIMA BINDU", email: "bindudanda284@gmail.com" },
  { id: "23FE1A0432", name: "GUJJULA SRINADH REDDY", email: "Srinadhrdy9@gmail.com" },
  { id: "23FE1A0433", name: "DASARI PRAHARSHINI", email: "praharshinidasari@gmail.com" },
  { id: "23FE1A0434", name: "DASARI VENKATA LAKSHMI", email: "2006venkatalakshmi@gmail.com" },
  { id: "23FE1A0435", name: "DAVILI PAVAN KUMAR", email: "pavankumardavili@gmail.com" },
  { id: "23FE1A0436", name: "DEVARAKONDA SOWJANYA", email: "sowjanyadevarakonda90@gmail.com" },
  { id: "23FE1A0438", name: "DODDAKA GAYATHRI", email: "doddakagayathri6@gmail.com" },
  { id: "23FE1A0439", name: "DODDI VENKATA PRABHAS", email: "venkataprabhasdoddi@gmail.com" },
  { id: "23FE1A0441", name: "DOSAKAYALA VENKATA SIVA REDDY", email: "sr8523520@gmail.com" },
  { id: "23FE1A0442", name: "DUDEKULA NAGURBEE", email: "dudekulanagurbeer@gmail.com" },
  { id: "23FE1A0445", name: "EPURU LAKSHMI", email: "lakshmiepuru351@gmail.com" },
  { id: "23FE1A0446", name: "ERUGULA RAJESH", email: "erugularajesh775@gmail.com" },
  { id: "23FE1A0447", name: "GADIPARTHI LAVANYA", email: "gadiparthilavanya151106@gmail.com" },
  { id: "23FE1A0448", name: "GANDIKOTA TIRUMULA VAISHNAVI", email: "vtirumala299@gmail.com" },
  { id: "23FE1A0449", name: "GELLI NEELIMA", email: "gneelima877@gmail.com" },
  { id: "23FE1A0450", name: "GOKAVARAPU SARANYA", email: "saranya24106@gmail.com" },
  { id: "23FE1A0451", name: "GOLLU SRIJA", email: "gollusrija@gmail.com" },
  { id: "23FE1A0452", name: "GOPISETTI BALA YAMUNA", email: "balayamuna8@gmail.com" },
  { id: "23FE1A0453", name: "GORANTLA GEETHA MADHURI", email: "geetha.g2811@gmail.com" },
  { id: "23FE1A0454", name: "GUDIMITLA JOSEPH SIRIL", email: "josephsiril68@gmail.com" },
  { id: "23FE1A0455", name: "GUNTURU MADHU LATHA", email: "madhulathagunturu01@gmail.com" },
  { id: "23FE1A0456", name: "GURINDAPALLI BHANU SRI", email: "gurindapallibhanusri@gmail.com" },
  { id: "23FE1A0457", name: "ILLURI SANJAY VARMA", email: "sanjay.varma.illuri@gmail.com" },
  { id: "23FE1A0458", name: "JAGARAPU PRABASH", email: "prabashjagarapuprabash@gmail.com" },
  { id: "23FE1A0459", name: "JAMPANI NITHIN", email: "nithinjampani@gmail.com" },
  { id: "23FE1A0461", name: "JETTY NAGENDRA PAVANI", email: "nagendrapavanijetty@gmail.com" },
  { id: "23FE1A0462", name: "JONNALAGADDA BALAJI", email: "jbalaji200505@gmail.com" },
  { id: "23FE1A0463", name: "JULAKANTI NAVYA", email: "navya965246@gmail.com" },
  { id: "23FE1A0464", name: "JYOTHI VAISHNAVI REDDY", email: "v9793392@gmail.com" },
  { id: "23FE1A0465", name: "KADAPA MOHANA PRIYA", email: "priyakadapa7@gmail.com" },
  { id: "23FE1A0466", name: "KADAVAKOLLU SURESH BABU", email: "sureshbabukadavakollu@gmail.com" },
  { id: "23FE1A0467", name: "KADIYAM GURU CHARAN", email: "gckadiyam67@gmail.com" },
  { id: "23FE1A0469", name: "KANDULA DEEKSHITHA", email: "kanduladeekshitha467@gmail.com" },
  { id: "23FE1A0470", name: "KASARANENI PRAVALLIKA", email: "Kasaraneni.pravallika808@gmail.com" },
  { id: "23FE1A0471", name: "KODEDASU ALEKHYA", email: "alekhyakodedasu@gmail.com" },
  { id: "23FE1A0472", name: "KOLLURI VINAY", email: "vinaykolluri43@gmail.com" },
  { id: "23FE1A0473", name: "KOLLURU GANESH", email: "kolluruganesh98@gmail.com" },
  { id: "23FE1A0474", name: "KOLLURU SIREESHA", email: "sireeshakolluru03@gmail.com" },
  { id: "23FE1A0475", name: "KONDAMUDI OLIVA GOSPEL", email: "olivagospelkondamudi@gmail.com" },
  { id: "23FE1A0476", name: "KOPPARAPU SAI TEJA", email: "saitejakopparapu44@gmail.com" },
  { id: "23FE1A0477", name: "KORLAKUNTA RUSHITHA", email: "korlakuntarushitha1@gmail.com" },
  { id: "23FE1A0478", name: "KOTU VAMSI KRISHNA", email: "vamsikotu6@gmail.com" },
  { id: "23FE1A0481", name: "LANKA NAGA LAKSHMI BALA SRI NITHYA", email: "lnlb.srinithya@gmail.com" },
  { id: "23FE1A0483", name: "KONDETI VENKATA SAI VAISHNAVI", email: "7013139215kvsv@gmail.com" },
  { id: "23FE1A0484", name: "MAILA GANESH", email: "ganeshyadav951544@gmail.com" },
  { id: "23FE1A0485", name: "MALAPATI VEERA VENKATA NARASIMHA NAIDU", email: "veeramalapati24@gmail.com" },
  { id: "23FE1A0487", name: "MAMIDI NEELRAJ", email: "luckymamidi8@gmail.com" },
  { id: "23FE1A0488", name: "MANDADHI AKHIL SAI", email: "akhilmandadhi@gmail.com" },
  { id: "23FE1A0490", name: "MANNEM MANOHAR REDDY", email: "mannemmanohar2004@gmail.com" },
  { id: "23FE1A0492", name: "MASANAM BALA SAI KUMAR", email: "masanamsaikumar1998@gmail.com" },
  { id: "23FE1A0494", name: "MIRIYALA THIRUMALA", email: "miriyalatirumala15@gmail.com" },
  { id: "23FE1A0495", name: "MOGALIPUVVU CHARAN SIVA SAI", email: "charanmogalipuvvu@gmail.com" },
  { id: "23FE1A0497", name: "MOLLI DAMODHARARAO", email: "dhamodhrarao.molli1@gmail.com" },
  { id: "23FE1A0498", name: "MUKIRI CHANDRIKA", email: "chandrikamukiri@gmail.com" },
  { id: "23FE1A0499", name: "MURAMUTLA VAMSI KRISHNA", email: "vk.muramutla@gmail.com" },
  { id: "23FE1A04A0", name: "MUVVA MANIKANTA GNANESWAR", email: "muvvachinnu07@gmail.com" },
  { id: "23FE1A04A1", name: "NAGA LAKSHMI GERA", email: "geranagalakshmi2020@gmail.com" },
  { id: "23FE1A04A4", name: "NANDURI GOWTHAM", email: "gowthamnanduri779@gmail.com" },
  { id: "23FE1A04A5", name: "NEELAM ANJALI", email: "neelamanjali43@gmail.com" },
  { id: "23FE1A04A7", name: "NULU SAI NAGENDRA", email: "sainagendra.n1359@gmail.com" },
  { id: "23FE1A04A8", name: "PACCHAVA NAGA LAKSHMI KRANTHIKA DEVI", email: "pacchavakranthika2485@gmail.com" },
  { id: "23FE1A04A9", name: "PALAPARTHI PRAVEEN", email: "praveenpalaparthi81@gamil.com" },
  { id: "23FE1A04B0", name: "PALAPARTHI SHARMILA", email: "palaparthisharmila97@gmail.com" },
  { id: "23FE1A04B1", name: "PANE SATHVIKA", email: "sathvikapane1919@gmail.com" },
  { id: "23FE1A04B2", name: "PANUGANTI BAJI", email: "panugantibaji605" },
  { id: "23FE1A04B3", name: "PASAM ANIL KUMAR", email: "pasamanilkumar01@gmail.com" },
  { id: "23FE1A04B4", name: "PASAM NAVYA", email: "pasamnavyareddy@gmail.com" },
  { id: "23FE1A04B5", name: "PASUPULA UDAY KIRAN", email: "udaykiranpasupula8978@gmail.com" },
  { id: "23FE1A04B6", name: "PATHA SATHVIKA", email: "sathvikapatha31@gmail.com" },
  { id: "23FE1A04B7", name: "PATTA MOUNIKA", email: "mounikapatta811@gmail.com" },
  { id: "23FE1A04B8", name: "PEDAPUDI YASWANTH", email: "yaswanthyashpeddapudi@gmail.com" },
  { id: "23FE1A04B9", name: "PENUMALA AKHIL", email: "penumalaakhil5@gmail.com" },
  { id: "23FE1A04C0", name: "PENUMALA SRINIVAS", email: "srinupenumala71@gmail.com" },
  { id: "23FE1A04C1", name: "PESANAGANTI DHANUSH", email: "Pesanagantidanush@gmail.com" },
  { id: "23FE1A04C2", name: "PILLI JYOTHI", email: "pillijyothi37@gmail.com" },
  { id: "23FE1A04C3", name: "PODILLA PREMKUMAR", email: "podillasiddu@gmail.com" },
  { id: "23FE1A04C4", name: "POKALA BHUVANA NAGALAKSHMI", email: "pokalabhuvananaidu123@gmail.com" },
  { id: "23FE1A04C5", name: "TADIKONDA TARUN", email: "dhanviktarun@gmail.com" },
  { id: "23FE1A04C6", name: "POLANATI BALAJI SANDEEP", email: "sandeepbalaji455@gmail.com" },
  { id: "23FE1A04C7", name: "POLISETTY SRIVALLI", email: "polisettysrivalli2005@gmail.com" },
  { id: "23FE1A04C8", name: "POTHURAJU LOKESWARI DEVI", email: "lokeswaripothuraju94@gmail.com" },
  { id: "23FE1A04C9", name: "PRATHIPATI HARINI", email: "prathipatiharini02@gmail.com" },
  { id: "23FE1A04D0", name: "RAMIREDDY GAARI RENUKA", email: "ramireddygaarirenuka@gmail.com" },
  { id: "23FE1A04D1", name: "RATHIKRINDA RAMYASRI", email: "ramyasrirathikrinda@gmail.com" },
  { id: "23FE1A04D2", name: "RAVULAPALLI SRI LAKSHMI DURGA", email: "lakshmiravulpalli01@gmail.com" },
  { id: "23FE1A04D3", name: "RAVURI HARINI", email: "ravuriharini1@gmail.com" },
  { id: "23FE1A04D4", name: "RAYANA VENKATA GOPAL", email: "rayanavenkatagopal@gmail.com" },
  { id: "23FE1A04D5", name: "RAYUDU PRUDHVI", email: "gnanaprasunarayudu@gmail.com" },
  { id: "23FE1A04D6", name: "VALIVETI VIJAY BABU", email: "vijaybabuvaliveti@gmail.com" },
  { id: "23FE1A04D7", name: "SAMPANGI NARESH", email: "nareshsampangi69@gmail.com" },
  { id: "23FE1A04D8", name: "SEERA DONI", email: "doniseera@gmail.com" },
  { id: "23FE1A04D9", name: "SENU MADHU", email: "senumadhu123@gmail.com" },
  { id: "23FE1A04E0", name: "SHAIK ABDUL SAMAD", email: "shaikabdulsamad832@gmail.com" },
  { id: "23FE1A04E1", name: "SHAIK ALIFA", email: "alifashaik188@gmail.com" },
  { id: "23FE1A04E2", name: "SHAIK CHANDINI SHAHISTA", email: "chandinishahista@gmail.com" },
  { id: "23FE1A04E3", name: "SHAIK IFRA SHIREEN", email: "ifra3959@gmail.com" },
  { id: "23FE1A04E4", name: "SHAIK JAVEED", email: "sksjvjaveed786v@gmail.com" },
  { id: "23FE1A04E5", name: "SHAIK KHAJA MOHIDDIN", email: "mohiddinshaik716@gmail.com" },
  { id: "23FE1A04E7", name: "SHAIK MOHAMMAD RAFI", email: "rafiskmohammad679@gmail.com" },
  { id: "23FE1A04E8", name: "SHAIK MYMUNISHA", email: "mymunishashaik81@gmail.com" },
  { id: "23FE1A04E9", name: "SHAIK NISHAD", email: "mahabunishad1314@gmail.com" },
  { id: "23FE1A04F0", name: "SHAIK SAMDHANI", email: "shaiksamdhani6617@gmail.com" },
  { id: "23FE1A04F1", name: "SHAIK ZIYAD", email: "bakshishaik576@gmail.com" },
  { id: "23FE1A04F3", name: "SONTI SIVA KRISHNA", email: "sontisivakrishna279@gmail.com" },
  { id: "23FE1A04F4", name: "SUNKARA KALYAN DURGA REDDY", email: "kalyandurgareddy@gmail.com" },
  { id: "23FE1A04F6", name: "TALASILA VAMSI KRISHNA", email: "talasilavamsikrishna5@gmail.com" },
  { id: "23FE1A04F7", name: "TAMMINENI LAKSHMI", email: "lakshmitammineni44@gmail.com" },
  { id: "23FE1A04F8", name: "TAMMISETTY SRIRAMA CHANDRA VARMA", email: "sriramcv2772@gmail.com" },
  { id: "23FE1A04F9", name: "TANNIRU AJAY KUMAR", email: "ajayk12128@gmail.com" },
  { id: "23FE1A04G0", name: "TASLIM FIRDOS", email: "taslimabdul73@gmail.com" },
  { id: "23FE1A04G1", name: "TATIKONDA VEERALAKSHMI", email: "veeralakshmiyadav27@gmail.com" },
  { id: "23FE1A04G2", name: "SHAIK HASSAIN AHMAD", email: "shaikhassain99856@gmail.com" },
  { id: "23FE1A04G3", name: "THOKALA VARDHAN", email: "vardhanthokala7@gmail.com" },
  { id: "23FE1A04G4", name: "THOTA KARTHIK", email: "karthikthota233@gmail.com" },
  { id: "23FE1A04G5", name: "THOTA PUJITHA", email: "poojithota033@gmail.com" },
  { id: "23FE1A04G6", name: "TULLURU RAVI VARDHAN", email: "vardhanravi22@gmail.com" },
  { id: "23FE1A04G8", name: "UBBARAPU VENKATA VIVEK", email: "marriboinavijay@gmail.com" },
  { id: "23FE1A04G9", name: "ULLANGULA GOPICHAND", email: "gopichand0348@gmail. com" },
  { id: "23FE1A04H0", name: "UPPALA MAHESH PAVAN KUMAR", email: "maheshuppala420@gmail.com" },
  { id: "23FE1A04H2", name: "USARTHI HEMANTH VENKATA SAMBA SIVA RAO", email: "babyboyhemanth@gmail.com" },
  { id: "23FE1A04H3", name: "UTUKURI NAGA LAKSHMI", email: "nagalakshmiutukuri53@gmail.com" },
  { id: "23FE1A04H5", name: "VAKKALAGADDA UMESHSAI", email: "umesh275.v@gmail.com" },
  { id: "23FE1A04H6", name: "VALAPARLA MEGHANA", email: "valaparlameghana5@gmail.com" },
  { id: "23FE1A04H7", name: "VALAPARLA RAMU", email: "ramuvalaparla2005@gmail.com" },
  { id: "23FE1A04H9", name: "VALLAMREDDY JOHN KISHAN REDDY", email: "vallamreddyjohnkishan2005@gmail.com" },
  { id: "23FE1A04I0", name: "VALLURI ABHIRAM", email: "valluri8123@gmail.com" },
  { id: "23FE1A04I1", name: "VALLURI ANANTHA KUMAR", email: "ananthakumar9505@gmail.com" },
  { id: "23FE1A04I2", name: "VANAMALA DEEPIKA", email: "deepika.vanamala23@gmail.com" },
  { id: "23FE1A04I3", name: "VEERISETTY NAGA BINDU PRIYA", email: "priyaveerisetty@gmail.com" },
  { id: "23FE1A04I4", name: "VEJANDLA DURGESWARI", email: "durgeswari023@gmail.com" },
  { id: "23FE1A04I5", name: "VELPURI SAI ROHITHA", email: "velpurisairohitha@gmail.com" },
  { id: "23FE1A04I6", name: "VELURU LAKSHMI PRASANNA", email: "velurulakshmiprasanna71@gmail.com" },
  { id: "23FE1A04I7", name: "VUTTI VENKATA MEGHANATH", email: "meghanath2525@gmail.com" },
  { id: "23FE1A04I8", name: "YALAVARTHI MOHAN SAI", email: "ymohansai29@gmail.com" },
  { id: "23FE1A04I9", name: "YANGALASETTY VAMSI", email: "yangalasettyvamsi1202@gmail.com" },
  { id: "23FE1A04J0", name: "YARLAGADDA MAHENDRA VARMA", email: "ymahendra2005@gmail.com" },
  { id: "23FE1A04J1", name: "YARRAGUNTLA DAVID RAJU", email: "yarraguntladavid134@gmail.com" },
  { id: "23FE1A04J2", name: "KARUMURI TEJA", email: "karumuriteja87@gmail.com" },
  { id: "23FE1A04J3", name: "SWARNA MAHA LAKSHMI", email: "Swarnamahalakshmi08@gmail.com" },
  { id: "23FE1A04J4", name: "POTTAPATI JASWANTH", email: "jaswanthpottapati@gmail.com" },
  { id: "23FE1A0501", name: "ADDAGIRI PRASANNA", email: "prasannaaddagiri21@gmail.com" },
  { id: "23FE1A0502", name: "AFREEN JAHAN", email: "jahanafreen514@gmail.com" },
  { id: "23FE1A0504", name: "ALIKEPALLI SISINDAR REDDY", email: "sisindarreddy49@gmai.com" },
  { id: "23FE1A0505", name: "ALLA SAI PRANATHI", email: "saipranathi250805@gmail.com" },
  { id: "23FE1A0506", name: "AMARA SRI LAKSHMI GOWRI", email: "amaragowri2665@gmail.com" },
  { id: "23FE1A0507", name: "ANKALU LAVANYA", email: "lavanyaankala8@gmail.com" },
  { id: "23FE1A0508", name: "ARIKATLA VENKATA NAVYA SRI", email: "navyasrivenkata084@gmail.com" },
  { id: "23FE1A0509", name: "BADUGU HEMA", email: "hemabadugu13@gmail.com" },
  { id: "23FE1A0510", name: "BANAVATH SURESH NAIK", email: "sureshbanavath2006@gmail.com" },
  { id: "23FE1A0511", name: "BANDI VENKATA KRISHNA REDDY", email: "krishnareddyb061@gmail.com" },
  { id: "23FE1A0512", name: "BAREDDY NARENDRA REDDY", email: "bareddynarendhrareddy555@gmail.com" },
  { id: "23FE1A0513", name: "BATHULA SRINITHA", email: "bathulasrinitha343@gmail.com" },
  { id: "23FE1A0514", name: "BATTU THARUN SAI", email: "battutharun98@gmail.com" },
  { id: "23FE1A0515", name: "BETHA SAILU", email: "sailubetha8@gmail.com" },
  { id: "23FE1A0517", name: "BHUNAM VYSHNAVI", email: "vyshnavibhunam@gmail.com" },
  { id: "23FE1A0521", name: "BONTHU HEMALATHA", email: "hemalathabonthu78@gmail.com" },
  { id: "23FE1A0522", name: "BORRU GAYATRI", email: "gayatriborru@gmail.com" },
  { id: "23FE1A0523", name: "BUDDIGA ABHIRAM", email: "abhirambuddiga@gmail.com" },
  { id: "23FE1A0524", name: "CHALUMURI GOPIKA", email: "chgopika421@gmail.com" },
  { id: "23FE1A0527", name: "CHAPPIDI UMA HARINI", email: "umaharinichappidi@gmail.com" },
  { id: "23FE1A0528", name: "CHAVALI VARSHITHA", email: "varshithachavali96@gmail.com" },
  { id: "23FE1A0529", name: "CHAVAPATI JASMIN", email: "jasminchavapati12@gmail.com" },
  { id: "23FE1A0530", name: "CHENNUPATI NAGABHAVYASRI", email: "chennupatinagabhavyasri@gmail.com" },
  { id: "23FE1A0531", name: "CHERUKURI MEGHANA SAI", email: "meghanasaicherukuri@gmail.com" },
  { id: "23FE1A0532", name: "CHIGILIPALLI VENKATESH", email: "chigilipallivenkatesh4@gmail.com" },
  { id: "23FE1A0537", name: "CHIPPALA MADHU", email: "madhuchippala17@gmail.com" },
  { id: "23FE1A0539", name: "CHIRAKALA HARITHA", email: "harithachirakala@gmail.com" },
  { id: "23FE1A0540", name: "DAGGUBATI GAYATRI", email: "gayatridaggubati1306@gmail.com" },
  { id: "23FE1A0541", name: "DAMMALAPA SAI NAGALALITHA", email: "sainagalalitha17@gmail.com" },
  { id: "23FE1A0542", name: "DASARI GOUTHAM SAI TEJA", email: "gowthamdasari6@gmail.com" },
  { id: "23FE1A0544", name: "DASARI NANI", email: "nanidasari305@gmail.com" },
  { id: "23FE1A0546", name: "DAVULURI SRI LAKSHMI GANESWARAMMA", email: "srilakshmiganeswarammadavuluri@gmail.com" },
  { id: "23FE1A0547", name: "DEVARAKONDA ROHITHA", email: "rohithadevarakonda39@gmail.com" },
  { id: "23FE1A0548", name: "DEVAVARAPU MYDHILI", email: "devavarapu2005@gmail.com" },
  { id: "23FE1A0549", name: "DODDA RAJU", email: "rajudodda72@gmail.com" },
  { id: "23FE1A0550", name: "DODDAPANENI CHANDRA VENKATA KRISHNA", email: "chandudoddapaneni6@gmail.com" },
  { id: "23FE1A0551", name: "DODDAPANENI MADHU SOWMYA", email: "doddapanenimadhusowmya@gmail.com" },
  { id: "23FE1A0554", name: "EMANI HARIKA", email: "emaniharikareddy@gmail.com" },
  { id: "23FE1A0555", name: "ERLA RADHA", email: "radhaerla64@gmail.com" },
  { id: "23FE1A0557", name: "GADIDAMALLA BHANU RASOOL", email: "bhanurasoolgadidamalla@gmail.com" },
  { id: "23FE1A0559", name: "GALI HASINI", email: "hasinigali21@gmail.com" },
  { id: "23FE1A0562", name: "GARIKAPATI POOJITHA", email: "poojithagarikapati2303@gmail.com" },
  { id: "23FE1A0563", name: "GEDDA KUNJANA SAI HARINI", email: "kunjanagedda@gmail.com" },
  { id: "23FE1A0564", name: "GIDUTHURI MAHA SUDHARSHAN", email: "giduthurimaha@gmail.com" },
  { id: "23FE1A0565", name: "GOLI MOHANA KRISHNA PHANI SAI KUMAR", email: "gmkphanisaikumar2006@gmail.com" },
  { id: "23FE1A0566", name: "GOLLA PRAVALLIKA", email: "gollapravallika4466@gmail.com" },
  { id: "23FE1A0567", name: "GORIPARTHI NAGA HARINI", email: "harinigoriparthi@gmail.com" },
  { id: "23FE1A0568", name: "GORLI KUSHVANTH SAI TEJA", email: "saitejagorli0806@gmail.com" },
  { id: "23FE1A0569", name: "GOTTAM ABHISHEK", email: "gottam.abhishek2006@gmail.com" },
  { id: "23FE1A0570", name: "GUDIPUDI SANJANA", email: "sanjugudipudi@gmail.com" },
  { id: "23FE1A0571", name: "GUMMADI SRUTHI", email: "gummadisruthi63@gmail.com" },
  { id: "23FE1A0572", name: "IRA PREM KUMAR", email: "iraprem50@gmail.com" },
  { id: "23FE1A0574", name: "JAKKULA DEEPIKA", email: "deepikajakkula8@gmail.com" },
  { id: "23FE1A0575", name: "JALE SWAPNA", email: "jaleswapna755@gmail.com" },
  { id: "23FE1A0576", name: "JAMMULA SRI MANIKANTA", email: "srimanikantajammula@gmail.com" },
  { id: "23FE1A0577", name: "JATOTH MUNI NAIK", email: "muninaikjatoth@gmail.com" },
  { id: "23FE1A0578", name: "JAVVAJI DIVYA", email: "javvajidivya333@gmail.com" },
  { id: "23FE1A0579", name: "JONNADULA LIKHITHA", email: "jonnadulalikhitha86@gmail.com" },
  { id: "23FE1A0580", name: "JULAKANTI SMILE", email: "smileyjulakanti@gmail.com" },
  { id: "23FE1A0581", name: "KAKI AVINASH", email: "captainavi001@gmail.com" },
  { id: "23FE1A0582", name: "KAKUMANU YOHAN", email: "yohan01082005@gmail.com" },
  { id: "23FE1A0583", name: "KALAGOTLA RAPHICK", email: "raffickalagotla13@gmail.com" },
  { id: "23FE1A0584", name: "KALAVAKOLLU KISHORE", email: "kishorekalavakollu18@gmail.com" },
  { id: "23FE1A0587", name: "KANAGALA RAJESH", email: "kanagalarajesh88@gmail.com" },
  { id: "23FE1A0589", name: "KARNI PUJITHA", email: "karnipujitha@gmail.com" },
  { id: "23FE1A0590", name: "KARUMURI DEVI", email: "devikarumuri56@gmail.com" },
  { id: "23FE1A0591", name: "KASIBISI VENKATA NAGA SUNITHA", email: "kasibisisunitha9@gmail.com" },
  { id: "23FE1A0592", name: "KATTA MEGHANA", email: "kattameghana28@gmail.com" },
  { id: "23FE1A0593", name: "KAVURI VENKATA SIVA REDDY", email: "chintukavuri18@gmail.com" },
  { id: "23FE1A0595", name: "KODAKANDLA VENKATA SESHA AKSHAY", email: "akshay246908@gmail.com" },
  { id: "23FE1A0596", name: "KOJJA PUJITHA", email: "pujithakojja@gmail.com" },
  { id: "23FE1A0597", name: "KOMMU ANUSHA", email: "anushakommu0311@gmail.com" },
  { id: "23FE1A0598", name: "KONAKANCHI NAVEEN SAI", email: "saikonakanchin@gmail.com" },
  { id: "23FE1A0599", name: "KONDA LOKESH", email: "kondalokesh2005@gmail.com" },
  { id: "23FE1A05A0", name: "KONDETI VIJAY KUMAR", email: "kondetivijay79@gmail.com" },
  { id: "23FE1A05A2", name: "KONIKI ANKAMMA RAO", email: "konikiankammarao@gmail.com" },
  { id: "23FE1A05A3", name: "KONIKI VENKAT", email: "konikivenkat438@gmail.com" },
  { id: "23FE1A05A4", name: "KOPPULA VAMSI", email: "kvamsi1126@gmail.com" },
  { id: "23FE1A05A5", name: "KOTA HARIKA", email: "kotaharika527@gmail.com" },
  { id: "23FE1A05A7", name: "KUDA BALAJI", email: "kudabalaji18@gmail.com" },
  { id: "23FE1A05B1", name: "MADDINENI CHINNIKRISHNA BALAJI", email: "balajimaddineni231@gmail.com" },
  { id: "23FE1A05B2", name: "MADDULA MANASA", email: "maddulamanasa485@gmail.com" },
  { id: "23FE1A05B3", name: "MADEM VENKATA GOPICHAND", email: "venkatagopichandmadem@gmaill.com" },
  { id: "23FE1A05B5", name: "MADITHATI INDUJA", email: "madithatiinduja@gmail.com" },
  { id: "23FE1A05B6", name: "MAGULURI SAI CHANDRAMOULI", email: "magulurisaichowdary143@gmail.com" },
  { id: "23FE1A05B7", name: "MAHAMMAD NAFEES AHAMAD", email: "mdnafeesahamad6@gmail.com" },
  { id: "23FE1A05B8", name: "MAHANTHI PRAVEEN", email: "mahanthipraveen77@gmail.com" },
  { id: "23FE1A05B9", name: "MALLAVARAPU SIVAPARVATHI", email: "sivaparvathimallavarapu226@gmail.com" },
  { id: "23FE1A05C1", name: "MAMIDI AKASH", email: "akashmamidi1229@gmail.com" },
  { id: "23FE1A05C2", name: "MANYAM JAGADEESWARI", email: "jagadeeswarimanyam19@gmail.com" },
  { id: "23FE1A05C5", name: "MEDARA AKASH", email: "akashmedhara@gmail.com" },
  { id: "23FE1A05C6", name: "MEKALA HARSHITH REDDY", email: "harshithreddymekala412@gmail.com" },
  { id: "23FE1A05C7", name: "MERUGUMALLA TANU SREE", email: "mtanu23804@gmail.com" },
  { id: "23FE1A05C9", name: "Mirza Mohammad Nazeeruddin", email: "mmnazeerelr@gmail.com" },
  { id: "23FE1A05D1", name: "MODUGULA YASASWINI", email: "yashumodugula@gmail.com" },
  { id: "23FE1A05D2", name: "MOGHAL ASHRAF BAIG", email: "moghalashraf7863@gmail.com" },
  { id: "23FE1A05D3", name: "MOGULLURI VENKATA MANOJ KUMAR", email: "manojkumarmogulluri08@gmail.com" },
  { id: "23FE1A05D4", name: "MOHAMMAD ANAS", email: "mohammadanas8921@gmail.com" },
  { id: "23FE1A05D7", name: "MOTUPALLI DEVENDRA BABU", email: "devendrababumotupalli@gmail.com" },
  { id: "23FE1A05D8", name: "MANDAPATI NISHMA", email: "nishmamandapati64@gmail.com" },
  { id: "23FE1A05D9", name: "MUDAVATHU NAGA LAKSHMI", email: "nagalakshmimudavath3108@gmail.com" },
  { id: "23FE1A05E0", name: "MULAKA ABHINAYASRI REDDY", email: "mulaka1289nayasrireddy@gmail.com" },
  { id: "23FE1A05E1", name: "MULLAPUDI TRISHA", email: "trishamullapudi@gmail.com" },
  { id: "23FE1A05E3", name: "MURALA NARENDRA", email: "narendramurala7@gmail.com" },
  { id: "23FE1A05E4", name: "MUSALA JAYAHARSHINI", email: "jayaharshini1527@gmail.com" },
  { id: "23FE1A05E5", name: "NADIMINTI YOGENDRA KIREETI", email: "kireeti213@gmail.com" },
  { id: "23FE1A05E6", name: "NAKARIKANTI TANMAI SRI VISWA GAYATHRI", email: "ntsvgayathrii@gmail.com" },
  { id: "23FE1A05E7", name: "NAKKALA OM PRAKASH", email: "omprakash05e7@gmail.com" },
  { id: "23FE1A05E8", name: "NALLABOTHULA VAMSI KRISHNA", email: "vamsikrishnanallabothula01@gmail.com" },
  { id: "23FE1A05E9", name: "NANDAVARAPU NAGOOR MEERA VALI", email: "nnm29072006@gmail.com" },
  { id: "23FE1A05F0", name: "DEVARAKONDA DAYA SAGAR", email: "devarakondadaya@gmail.com" },
  { id: "23FE1A05F1", name: "NEKKALAPU KEZIA", email: "kezianekkalapu2005@gmail.com" },
  { id: "23FE1A05F2", name: "NELLURI SIVANNARAYANA", email: "nellurisivannarayana77@gmail.com" },
  { id: "23FE1A05F3", name: "NIKHIL JALLI", email: "nikhiljalli15@gmail.com" },
  { id: "23FE1A05F4", name: "NITLA BHAVANI", email: "nitlabhavani1432@gmail.com" },
  { id: "23FE1A05F5", name: "NIZAMPATNAM BALAJI SAI", email: "rockybalaji2005@gmail.com" },
  { id: "23FE1A05F6", name: "NUNSAVATHU SRI LAKSHMI SEVALSAI KUMAR NAIK", email: "saikumarnaik881@gmail.com" },
  { id: "23FE1A05F7", name: "ORSU LIKHITA PRIYA", email: "likithapriya2005@gmail.com" },
  { id: "23FE1A05F8", name: "ORUGANTI LAKSHMI MOUNIKA", email: "orugantilakshmimounika@gmail.com" },
  { id: "23FE1A05F9", name: "ORUGANTI NARASIMHA NAIDU", email: "orugantinarasimha156@gmail.com" },
  { id: "23FE1A05G0", name: "OSURI YASWANTH", email: "yaswanthosuri55@gmail.com" },
  { id: "23FE1A05G1", name: "P RAMPOORNA SAI", email: "prampoornasai@gmail.com" },
  { id: "23FE1A05G2", name: "PADALA PAVAN", email: "padalapavan1611@gmail.com" },
  { id: "23FE1A05G3", name: "PADAMATA SRAVANI", email: "sravanipadamata4@gmail.com" },
  { id: "23FE1A05G4", name: "PALAKALURI KOTESWARA RAO", email: "palakalurikoteswararao4@gmail.com" },
  { id: "23FE1A05G5", name: "PALAPARTHI SAILAJA", email: "sailajapalaparthi05@gmail.com" },
  { id: "23FE1A05G9", name: "PATHAN ANSAR KHAN", email: "ansarkhan260205@gmail.com" },
  { id: "23FE1A05H0", name: "PATHAN HABEEB KHAN", email: "khanphabeeb8@gmail.com" },
  { id: "23FE1A05H1", name: "PATTAN KHAJA", email: "Pkhajap768@gmail.com" },
  { id: "23FE1A05H2", name: "PEETHA PUJITHA", email: "pujithapeetha@gmail.com" },
  { id: "23FE1A05H3", name: "PERLI JESSY WESNEENA", email: "jessyperli04@gmail.com" },
  { id: "23FE1A05H4", name: "PERUSOMULA NAGA MANOJ", email: "nagamanoj2006@gmail.com" },
  { id: "23FE1A05H5", name: "PILLARI HINDU SREE", email: "pillarihindusree6@gmail.com" },
  { id: "23FE1A05H6", name: "PILLI SATISH BABU", email: "pillisatishbabu1810@gmail.com" },
  { id: "23FE1A05H7", name: "PITTU AKHILA", email: "pittuakhilareddy@gmail.com" },
  { id: "23FE1A05H8", name: "POLAVARAPU LOHITHA CHOWDARY", email: "lohithapolavarapu@gmail.com" },
  { id: "23FE1A05H9", name: "POLISETTI SUSMITHA", email: "susmithapolisetti16@gmail.com" },
  { id: "23FE1A05I0", name: "PONEGETI YARAMALA", email: "ponegetiyaramalareddy@gmail.com" },
  { id: "23FE1A05I1", name: "PONNAM VENKATESH", email: "venkateshponnam555@gmail.com" },
  { id: "23FE1A05I3", name: "POPURI SANIYA", email: "popurisaniya@gmail.com" },
  { id: "23FE1A05I4", name: "KARAKATLA GURUDUTTA", email: "guruduttakarakatla18@gmail.com" },
  { id: "23FE1A05I5", name: "PRATHIKODUPU CHAKRADHARA RAJU", email: "prathikodupuchakradhararaju@gmail.com" },
  { id: "23FE1A05I6", name: "PRATHIPATI GOWTHAM SAI", email: "gowthamsaiprathipati15@gmail.com" },
  { id: "23FE1A05J0", name: "RAGI PRAKASH", email: "ragiprakash240@gmail.com" },
  { id: "23FE1A05J1", name: "RAJANA ASHOK", email: "rajanaashok13@gmail.com" },
  { id: "23FE1A05J3", name: "RAMAVATH SUPRIYA BAI", email: "supriyabairamavath831@gmail.com" },
  { id: "23FE1A05J4", name: "RAMISETTY SUSMITHA", email: "ramisettysusmitha7@gmail.com" },
  { id: "23FE1A05J4", name: "RAMISETTY SUSMITHA", email: "ramisettysusmitha7@gmail.com" },
  { id: "23FE1A05J5", name: "RAPOLU HEMANTH", email: "hemanthrapolu19@gmail.com" },
  { id: "23FE1A05J7", name: "RAVURI TEJASWINI", email: "tejaswiniravuri17@gmail.com" },
  { id: "23FE1A05J8", name: "REDDYMASU SHIRISHA", email: "sirishareddymasu@gmail.com" },
  { id: "23FE1A05J9", name: "RODDA NAGALAKSHMI", email: "roddanagalakshmi432@gmail.com" },
  { id: "23FE1A05K1", name: "SALENDRA SUSANNA", email: "susannasalendhra2005@gmail.com" },
  { id: "23FE1A05K2", name: "SALIMITTI LOKESH", email: "lokeshsalimetty@gmail.com" },
  { id: "23FE1A05K3", name: "SAMBANGI VAMSHI KRISHNA", email: "vamshisambangi566@gmail.com" },
  { id: "23FE1A05K4", name: "SAMI VENKATA NAGA NIRMALA ANUSHNA", email: "samianushna@gmail.com" },
  { id: "23FE1A05K6", name: "SAYED FAYAZ", email: "khasimycp786@gmail.com" },
  { id: "23FE1A05K7", name: "SERU SONI", email: "serusonisoni43@gmail.com" },
  { id: "23FE1A05K8", name: "SESHAMSETTI ANUSHA", email: "srinaidu01140131@gmail.com" },
  { id: "23FE1A05L1", name: "SHAIK DARGA ABDUL GAFOOR", email: "abdulgafoorshaikdarga@gmail.com" },
  { id: "23FE1A05L2", name: "SHAIK HANEEFA", email: "skhaneefaraheem@gmail.com" },
  { id: "23FE1A05L3", name: "SHAIK JAINA VALI", email: "jainass786@gmail.com" },
  { id: "23FE1A05L5", name: "SHAIK MANJUSHA", email: "shaikmanjusha4@gmail.com" },
  { id: "23FE1A05L8", name: "KONAKANCHI SAI SIRISHA", email: "konakanchisirisha2006@gmail.com" },
  { id: "23FE1A05L9", name: "SHAIK VAZIRUNNISA", email: "vazirunnisa7@gmail.com" },
  { id: "23FE1A05M0", name: "SIVVALA SRIHARI", email: "sriharisivvala216@gmail.com" },
  { id: "23FE1A05M1", name: "TELLAMEKALA VENKATA JOGI ABHILASH", email: "abhilashyadav6718@gmail.com" },
  { id: "23FE1A05M2", name: "SONTINENI SAI KRISHNA CHOWDARI", email: "kittusontineni@gmail.com" },
  { id: "23FE1A05M3", name: "TADDI SURYAMMA", email: "saraswatitaddi@gmail.com" },
  { id: "23FE1A05M4", name: "TALURI RAGA DEEPTHI", email: "ragadeepthitalluri2004@gmail.com" },
  { id: "23FE1A05M5", name: "TARRA TEJA VIKAS", email: "tejavikastarra@gmail.com" },
  { id: "23FE1A05M6", name: "THADIBOINA MURARI KRISHNA", email: "murarithadiboina@gmail.com" },
  { id: "23FE1A05M7", name: "THIPPULA REDDYGARI MANASA", email: "manasa18106@gmail.com" },
  { id: "23FE1A05M8", name: "LINGA SAI BHARATH", email: "saibharathlinga@gmail.com" },
  { id: "23FE1A05M9", name: "THOTA PAVAN GOPAL", email: "kowshikvarma327@gmail.com" },
  { id: "23FE1A05N0", name: "TUMMALA LOKESH", email: "lokeshtummala280@gmail.com" },
  { id: "23FE1A05N2", name: "VAKA VENKATESH", email: "venkatesh22210@gmail.com" },
  { id: "23FE1A05N4", name: "VALLABHAPURAPU TEJASWI", email: "tejaswivallabhapurapu@gmail.com" },
  { id: "23FE1A05N5", name: "VALLURI DHANUSRI", email: "valluridhanusri2005@gmail.com" },
  { id: "23FE1A05N6", name: "VANGA KEERTHI REDDY", email: "keerthireddyvanga1@gmail.com" },
  { id: "23FE1A05N7", name: "VANJA JOYCEE FLEROMA", email: "joyceefleromavanja@gmail.com" },
  { id: "23FE1A05O0", name: "YADALA HARI PRASAD", email: "prasadyadala74@gmail.com" },
  { id: "23FE1A05O2", name: "YANAMADALA CHANDANA SREE", email: "sreec8130@gmail.com" },
  { id: "23FE1A05O3", name: "YARAGALLA GOWTHAMKUMAR", email: "yaragallagowthamkumar@gmail.com" },
  { id: "23FE1A05O6", name: "PENUGONDA BABY SUDHA JAYASRI", email: "jayasripenugonda@gmail.com" },
  { id: "23FE1A05O7", name: "KAMANI GOPINATH", email: "gopinathkamani@gmail.com" },
  { id: "23FE1A05P0", name: "SHAIK SREE SAI MURTHY", email: "sreesaimurthy07@gmail.com" },
  { id: "23FE1A1201", name: "AKKALA CHANDRA KISHORE REDDY", email: "reddyakkalachandrakishor@gmail.com" },
  { id: "23FE1A1203", name: "BALUSUPATI ROHINI", email: "rohinisrinivasbalusupati@gmail.com" },
  { id: "23FE1A1204", name: "BANDARU HYMANI SIVESWARI", email: "bandaruhymanisiveswari@gmail.com" },
  { id: "23FE1A1205", name: "BATTULA VENKATA MANIKANTA", email: "manikantamani52723@gmail.com" },
  { id: "23FE1A1206", name: "BHUKYA SRINIVAS NAYAK", email: "srinivasnayakb8@gmail.com" },
  { id: "23FE1A1207", name: "BOLLU SADVIKA", email: "bollusadvika5@gmail.com" },
  { id: "23FE1A1209", name: "CHILUKURI CHANUKYA CHANDRA", email: "chandrachanukya924@gmail.com" },
  { id: "23FE1A1211", name: "DANABOYINA PAVAN KUMAR", email: "tinkudonaboina@gmail.com" },
  { id: "23FE1A1212", name: "GALI BUELA JHANSI", email: "galibuelajhansi@gmail.com" },
  { id: "23FE1A1213", name: "GALI RAMYA JYOTHI", email: "ramyajyothigali@gmail.com" },
  { id: "23FE1A1214", name: "GARIKA RAGHAVENDRA", email: "garikaraghavendra@gmail.com" },
  { id: "23FE1A1215", name: "GARNEDI TARUN KUMAR", email: "garneditarunkumar188@gmail.com" },
  { id: "23FE1A1216", name: "GHANTA POOJA SRI", email: "poojasrighanta955@gmail.com" },
  { id: "23FE1A1217", name: "GONUGUNTA LAKSHMI HARSHA VARDHAN SAI", email: "harshavardhan150806@gmail.com" },
  { id: "23FE1A1218", name: "GOTTIPATI ANJALI DEVI", email: "gottipatianjalidevi3@gmail.com" },
  { id: "23FE1A1219", name: "GUNJI NANDINI", email: "gunjinandini25@gmail.com" },
  { id: "23FE1A1220", name: "JANGAM AKSHAYA", email: "jangamakshaya4@gmail.com" },
  { id: "23FE1A1223", name: "KANCHETI NANDANA JYOTHI", email: "nyandy.583@gmail.com" },
  { id: "23FE1A1224", name: "KARTHIK REDDY VAJRALA", email: "vajralakarthikreddy143@gmail.com" },
  { id: "23FE1A1225", name: "KATA HARI GOPALA KRISHNA", email: "gopalhari293@gmail.com" },
  { id: "23FE1A1227", name: "KRAPA KUSUMA", email: "kusumakrapa45@gmail.com" },
  { id: "23FE1A1228", name: "MANAM VENGAMADHURI", email: "vengamadhurimanam10@gmail.com" },
  { id: "23FE1A1229", name: "MANDADI JAGADHEESH", email: "m.jagadheesh7396525396@gmail.com" },
  { id: "23FE1A1230", name: "MANNEM VAMSI KRISHNA", email: "mannemvamsi0730@gmail.com" },
  { id: "23FE1A1232", name: "MEGAVATH DATTU NAIK", email: "dathunaik631@gmail.com" },
  { id: "23FE1A1233", name: "NARENDRA NAGA SUDHEER", email: "nagasudheernarendra7071@gmail.com" },
  { id: "23FE1A1234", name: "NELLURI SINGARAIAH", email: "nellurisingaraiah9@gmail.com" },
  { id: "23FE1A1236", name: "NUNNA ANUSHA", email: "anushanunna196@gmail.com" },
  { id: "23FE1A1238", name: "PANEM NAVEEN", email: "panemnaveen12@gmail.com" },
  { id: "23FE1A1239", name: "PATIBANDLA JAYASRI", email: "patibandlajayasri@gmail.com" },
  { id: "23FE1A1244", name: "PRATHI MADHAVI", email: "madhaviprathi36@gmail.com" },
  { id: "23FE1A1245", name: "RACHAKONDA GAYATHRI", email: "gayathrirachakonda1726@gmail.com" },
  { id: "23FE1A1246", name: "RELLA VIJAYA LAKSHMI", email: "vijayalakshmi.rella46@gmail.com" },
  { id: "23FE1A1247", name: "REVU DEEKSHITHA", email: "deekshitharevu@gmail.com" },
  { id: "23FE1A1248", name: "SHAIK ARSH AFROZ", email: "arshafroz1915@gmail.com" },
  { id: "23FE1A1250", name: "SHAIK NAYEEM", email: "shaiknayeem1414@gmail.com" },
  { id: "23FE1A1251", name: "SHAIK SAMEENA", email: "sameenashaik5251@gmail.com" },
  { id: "23FE1A1253", name: "SHAIK VASIF", email: "shaikvasif02@gmail.com" },
  { id: "23FE1A1254", name: "SYED NAJMA", email: "najmasyed83@gmail.com" },
  { id: "23FE1A1257", name: "THIRUVEEDULA NAGA SANDEEP", email: "nagasandeepthiru@gmail.com" },
  { id: "23FE1A1258", name: "THOTA LAKSHMI NARASAMMA", email: "lakshmithota942@gmail.com" },
  { id: "23FE1A1260", name: "VAJRALA SNEHA PRIYA", email: "Snehapriyavajrala@gmail.com" },
  { id: "23FE1A1263", name: "VELPULA VENKATA SAI VIVEK TAGUR", email: "vvelpulavenkatasai@gmail.com" },
  { id: "23FE1A1264", name: "YALAVARTHI SREYANTH", email: "yalavarathisreyanth2006@gmail.com" },
  { id: "23FE1A1265", name: "YAMANI KARTHIK", email: "karthikntr673@gmail.com" },
  { id: "23FE1A1266", name: "THOTA MANIKANTA", email: "manikantachowdarythota@gmail.com" },
  { id: "23FE1A4201", name: "ADUSUMALLI GOWTHAM", email: "gowthamadusumalliadusumalligow@gmail.com" },
  { id: "23FE1A4202", name: "ANGIREKULA BHAVANA", email: "angirekulabhavana@gmail.com" },
  { id: "23FE1A4203", name: "BATHULA SHANMUKHA PRIYA", email: "bathulashanmukhapriya05@gmail.com" },
  { id: "23FE1A4204", name: "BATTULA YASWANTH", email: "yb961824@gmail.com" },
  { id: "23FE1A4205", name: "BHAVANAM SAI KIRAN REDDY", email: "saikiranbhavanam584@gmail.com" },
  { id: "23FE1A4206", name: "BELLAMKONDA DURGA BHAVANI", email: "bhavani101205@gmail.com" },
  { id: "23FE1A4207", name: "BODEMPUDI ANUDEEP", email: "anudeepchowdary13@gmail.com" },
  { id: "23FE1A4208", name: "BUDATI RAGHAVENDRA KUMAR", email: "raghavendrakumarbudati@gmail.com" },
  { id: "23FE1A4209", name: "CHERUKURU PREMCHAND", email: "premchandcherukuru@gmail.com" },
  { id: "23FE1A4210", name: "CHIMMILI LAKSHMI KUMARI", email: "chimmililakshmikumari57@gmail.com" },
  { id: "23FE1A4211", name: "CHINTAGUNTI RAMYASRI", email: "chintaguntiramyasri05@gmail.com" },
  { id: "23FE1A4213", name: "CHOWTA ARCHANA", email: "archana192627@gmail.com" },
  { id: "23FE1A4215", name: "DEVANA GOPI KRISHNA", email: "d.gopikrishna07@gmail.com" },
  { id: "23FE1A4217", name: "GADDAM MANOJ BHARGAV", email: "gaddammanojbhargav@gmail.com" },
  { id: "23FE1A4218", name: "GADE HIMA BINDU", email: "himabindugade0706@gmail.com" },
  { id: "23FE1A4223", name: "GOPE UMA MANI SREE", email: "manisrigope2005@gmail.com" },
  { id: "23FE1A4224", name: "GUMMADIDALA AKSHAY", email: "akshaygummadidala@gmail.com" },
  { id: "23FE1A4225", name: "INDLACHERUVU AMAR MANIKANTA", email: "manikantaindlacheruvu@gmail.com" },
  { id: "23FE1A4226", name: "KACHALLA AJAYNAIDU", email: "ajaynaidu1308@gmail.com" },
  { id: "23FE1A4227", name: "KALAVAKURI SRAVANI", email: "sravanikalavakuri2004@gmail.com" },
  { id: "23FE1A4228", name: "KALE SRI NIKHIL ROSHAN", email: "kalesrinikhilroshan123@gmail.com" },
  { id: "23FE1A4230", name: "KHANDAPU RAHUL", email: "rahulkhandapu@gmail.com" },
  { id: "23FE1A4231", name: "KONDRU HASITHA", email: "hasitha.kondru@gmail.com" },
  { id: "23FE1A4232", name: "KOPPOLU VENKAT", email: "koppoluvenkat77@gmail.com" },
  { id: "23FE1A4233", name: "KOTA SASI KIRAN REDDY", email: "kotasasikiran07@gmail.com" },
  { id: "23FE1A4234", name: "KOTHAPALLI SRI VARDHAN CHOWDARY", email: "kothapallisrivardhanchowdary6@gmail.com" },
  { id: "23FE1A4236", name: "MAHALI BHAVYA", email: "bhavyamahali@gmail.com" },
  { id: "23FE1A4237", name: "MALINEDI NIHARIKA", email: "malineniniharika16@gmail.com" },
  { id: "23FE1A4238", name: "MANDALAPU LILLY", email: "mandalapulilly@gmail.com" },
  { id: "23FE1A4239", name: "MARISETTY MEGHANA", email: "marisettymeghana123@gmail.com" },
  { id: "23FE1A4240", name: "MITTA NAVYA SAI", email: "navyanani1984@gmail.com" },
  { id: "23FE1A4241", name: "MOHAMMAD FARHEEN", email: "farheenmohammad102@gmail.com" },
  { id: "23FE1A4242", name: "MOHAMMAD SHAIK ABDULLAH", email: "mohammadshaikabdullah2003@gmail.com" },
  { id: "23FE1A4243", name: "MURARI JAGAN SAI", email: "murarijagansai@gmail.com" },
  { id: "23FE1A4244", name: "NAZNEEN FIRDOUS BEGUM", email: "nazneenfirdous741@gmail.com" },
  { id: "23FE1A4245", name: "NUNUSAVATH BHANU NAYAK", email: "bhanunayak9505@gmail.com" },
  { id: "23FE1A4246", name: "PALLAPU VIJAY", email: "vijaypallapu50@gmail.com" },
  { id: "23FE1A4247", name: "PATTAN SHARUKH KHAN", email: "sharukh14082004@gmail.com" },
  { id: "23FE1A4249", name: "PITLA CHAITANYA REDDY", email: "pchaitanyareddy898@gmail.com" },
  { id: "23FE1A4250", name: "RAYADI TRISHA", email: "rayaditrisha@gmail.com" },
  { id: "23FE1A4251", name: "SHAIK MAHABUNNISA", email: "mabusk509@gmail.com" },
  { id: "23FE1A4252", name: "SHAIK MOHAMMAD KARISHMA", email: "karishma4252@gmail.com" },
  { id: "23FE1A4253", name: "SHAIK MOULALI", email: "moulalishaik786724@gmail.com" },
  { id: "23FE1A4256", name: "SIVALANKA MONOJ KUMAR", email: "monojpcs22@gmail.com" },
  { id: "23FE1A4259", name: "THARIGOPPULA MANIKANTA NARASIMHAIAH", email: "tharigoppulamanikanta@gmail.com" },
  { id: "23FE1A4261", name: "VALLEPU PRANAY KUMAR", email: "pranayvallepu415@gmail.com" },
  { id: "23FE1A4262", name: "VANTERU RAMAKANTH", email: "ramakanthvanteru05@gmail.com" },
  { id: "23FE1A4263", name: "YARRAM KUSUMA REDDY", email: "kusumayarram@gmail.com" },
  { id: "23FE1A4265", name: "NIMMAGADDA DIVYASRI SAI SARVANI", email: "ndsssarvani@gmail.com" },
  { id: "23FE1A4301", name: "ADDEPALLI SUHITH", email: "suhithaddepalli2005@gmail.com" },
  { id: "23FE1A4302", name: "ATCHI HIMA BINDU", email: "atchihimabindu@gmail.com" },
  { id: "23FE1A4303", name: "AVULA RAHUL KUMAR REDDY", email: "arahulkumarreddy12@gmail.com" },
  { id: "23FE1A4304", name: "BADDURI HARSHITHA", email: "baddduriharshitha@gmail.com" },
  { id: "23FE1A4305", name: "BETHA PRABHAKAR REDDY", email: "prabhakarreddybetha@gmail.com" },
  { id: "23FE1A4306", name: "BHAVIRISETTI NITHIN", email: "nithinsmart323@gmail.com" },
  { id: "23FE1A4307", name: "BITRA SAI BHARATHI", email: "sbitra20@gmail.com" },
  { id: "23FE1A4308", name: "BOLLEDDU GOWTHAMI", email: "bolleddugowthami89@gmail.com" },
  { id: "23FE1A4309", name: "BONTHA RAMANAIAH", email: "ramanaiahbontha99@gmail.com" },
  { id: "23FE1A4310", name: "CHANDRAGIRI NAVEEN", email: "chandragirinaveen61@gmail.com" },
  { id: "23FE1A4311", name: "CHILUKURI SNEHA", email: "chilukurisnehachowdary@gmail.com" },
  { id: "23FE1A4312", name: "DEVARASETTY MANASA", email: "manasadevarasetty6@gmail.com" },
  { id: "23FE1A4313", name: "GADIPARTHI CHANDRIKA SAI SRI", email: "saiiichowdarychandrika@gmail.com" },
  { id: "23FE1A4314", name: "GOPANABOYINA DHANUSHA", email: "dhanusha7411@gmail.com" },
  { id: "23FE1A4315", name: "GUDIPATI BHANU PRAKASH", email: "bhanuprakashgudipati.123@gmail.com" },
  { id: "23FE1A4316", name: "GUDURI BALA BHASKAR RAO", email: "guduribhaskar24@gmail.com" },
  { id: "23FE1A4317", name: "JAGANNADHAM NAVYA SRI", email: "jagannadhamnavya2@gmail.com" },
  { id: "23FE1A4318", name: "JILLAPOGU SIVA DURGA BHAVANI", email: "jillapoguduraga@gmail.com" },
  { id: "23FE1A4319", name: "KAKANI MOHAN", email: "kakanimohank@gmail.com" },
  { id: "23FE1A4320", name: "KAKUNURI HEMA SREE", email: "kakunurihemasree@gmail.com" },
  { id: "23FE1A4321", name: "KARPURAPU KAVYA SRI", email: "kavyasrikarpurapu@gmail.com" },
  { id: "23FE1A4322", name: "KATREDDY JYOTHSNA", email: "jyokatreddy@gmail.com" },
  { id: "23FE1A4323", name: "KEERTHI BAI ISLAVATH", email: "keerthiislavath8@gmail.com" },
  { id: "23FE1A4325", name: "KOMPALA AKSHAY", email: "Kompalaakshay2004@gmail.com" },
  { id: "23FE1A4326", name: "KONAMANCHILI NANDU PRIYA", email: "konamanchilinandupriya@gmail.com" },
  { id: "23FE1A4327", name: "KORRAPATI PAVANI", email: "korrapatipavani2428@gmail.com" },
  { id: "23FE1A4329", name: "KUPPALA AMARESWARA RAO", email: "amarnadhalm123@gmail.com" },
  { id: "23FE1A4330", name: "KURAPATI HANNAH", email: "hannahkurapati@gmail.com" },
  { id: "23FE1A4331", name: "MACHERLA PRAVEEN SAI", email: "praveensai3333@gmail.com" },
  { id: "23FE1A4332", name: "MADIREDDY KAVYA", email: "m.kavyareddy777@gmail.com" },
  { id: "23FE1A4333", name: "MATHE EINSTEIN", email: "m.einstein42@gmail.com" },
  { id: "23FE1A4334", name: "MATTA JYOTHIKA", email: "mattajyothika@gmail.com" },
  { id: "23FE1A4335", name: "MUDAVATHU LAKSHMAN NAIK", email: "lakshman15923@gmail.com" },
  { id: "23FE1A4336", name: "MULLANGI YAMUNA", email: "mullangiyamuna@gmail.com" },
  { id: "23FE1A4337", name: "NAGULAPATI DEVI", email: "nagulapatidevi57@gmail.com" },
  { id: "23FE1A4338", name: "NALLAGORLA SAMRAJYAM", email: "samrajyamnallagorla5@gmail.com" },
  { id: "23FE1A4339", name: "NANNAPANENI JAHNAVI", email: "jahnavi16102005@gmail.com" },
  { id: "23FE1A4340", name: "NIZAMPATNAM TRINADH", email: "ssvtn21@gmail.com" },
  { id: "23FE1A4341", name: "PALLA YASWANTH SAI SIMHA", email: "yaswanthcherry2006@gmail.com" },
  { id: "23FE1A4342", name: "PAMULAPATI CHANDANA SRI", email: "pamulapatichandanasri@gmail.com" },
  { id: "23FE1A4343", name: "PATHAN NEELOFER", email: "neeloferpathan2023@gmail.com" },
  { id: "23FE1A4344", name: "PATTAN HISHAM KHAN", email: "hishamkhan3009@gmail.com" },
  { id: "23FE1A4345", name: "POLICHERLA SIVA SAI NAGA LAKSHMI", email: "lakshmipolicharla1508@gmail.com" },
  { id: "23FE1A4346", name: "SAI CHAITANYA ANNAM", email: "annamsai825@gmail.com" },
  { id: "23FE1A4347", name: "SAJJA BINDU SRI", email: "sajjabindusri@gmail.com" },
  { id: "23FE1A4348", name: "SHAIK ABDUL RAZAK", email: "razzakshaikh2320@gmail.com" },
  { id: "23FE1A4349", name: "SHAIK HUSSAINBI", email: "sm.hussainbi@gmail.com" },
  { id: "23FE1A4352", name: "SUNKARA JYOTHSNA PRIYA", email: "jyothsnasunkara19@gmail.com" },
  { id: "23FE1A4354", name: "TAGORE KOTTAPALLI", email: "chowdarytagore07@gmail.com" },
  { id: "23FE1A4355", name: "TAGULLA NATHANIEL", email: "tagullanathaniel@gmail.com" },
  { id: "23FE1A4356", name: "TAMMA YAGNA SIVA HARSHITH REDDY", email: "tharshithreddy07@gmail.com" },
  { id: "23FE1A4357", name: "TATA GOWTHAMI", email: "gowthamitata464@gmail.com" },
  { id: "23FE1A4358", name: "THATAVARTHY SHANMUKHA VENKATA VARDHAN", email: "shanmukha.tsvv@gmail.com" },
  { id: "23FE1A4359", name: "THIRUVEEDULA ROHITH SRI VENKATA SIDDARDHA", email: "siddutiruveedula633@gmail.com" },
  { id: "23FE1A4360", name: "THOLLIKONDA VASAVI", email: "thollikondavasavi@gmail.com" },
  { id: "23FE1A4361", name: "VALIVARTHI GOWTHAMI", email: "gouthamivalivarthi@gmail.com" },
  { id: "23FE1A4362", name: "VARAKAVI RAVI TEJA RAJU", email: "rt164486@gmail.com" },
  { id: "23FE1A4363", name: "YEMINENI KAVYA", email: "kavyayemineni20@gmail.com" },
  { id: "23FE1A4365", name: "PINNIKA VENKATA RAO", email: "venkychowdary017@gmail.com" },
  { id: "23FE1A4404", name: "ANNAPUREDDY RAJITHA", email: "annapureddyrajitha2005@gmail.com" },
  { id: "23FE1A4407", name: "BAPANAPALLI TEJASWINI", email: "tejaswinibapanapalli@gmail.com" },
  { id: "23FE1A4408", name: "BATHULA RAJITHA", email: "rajithabathula17@gmail.com" },
  { id: "23FE1A4409", name: "BOMMANABOINA VENKATA KOTESWARA RAO", email: "koteswararaob062@gmail.com" },
  { id: "23FE1A4413", name: "DANDI VENKATARAMANA", email: "dandivenky@gmail.com" },
  { id: "23FE1A4415", name: "GANGIREDDY VENKATA SRAVANTHI", email: "gangireddyvenkataramana1@gmail.com" },
  { id: "23FE1A4416", name: "GOLLA ANANTHA LAKSHMI HEMA HARINI", email: "harinigolla681@gmail.com" },
  { id: "23FE1A4418", name: "JATAVATHU NANDINI BAI", email: "nandinijatavath4@gmail.com" },
  { id: "23FE1A4424", name: "KANNETI TRINATH GANESH", email: "kannetisidhu2@gmail.com" },
  { id: "23FE1A4425", name: "KAPALAVAI ADITHYA KUMAR", email: "Adithyakumarkapalavai@gmail.com" },
  { id: "23FE1A4426", name: "KEMA PAVAN KUMAR", email: "pavankumarkema@gmail.com" },
  { id: "23FE1A4428", name: "KORRAKUTI THIRUMALA VASU", email: "korrakutivasu03@gmail.com" },
  { id: "23FE1A4431", name: "M DEVA PRIYA DARSHINI", email: "priyadarshinimoparthi@gmail.com" },
  { id: "23FE1A4432", name: "MANDALAPU MADHURI", email: "mandalapumadhuri9@gmail.com" },
  { id: "23FE1A4436", name: "OMKAR CHALLAGOLLA", email: "challagollaomkar@gmail.com" },
  { id: "23FE1A4437", name: "PAILA SYAMALA DEVI", email: "syamaladevipaila837@gmail.com" },
  { id: "23FE1A4438", name: "PALLAPU SAI KRISHNA", email: "saikrishnapallapu4@gmail.com" },
  { id: "23FE1A4439", name: "PEDDARAPU SIVA SANKAR", email: "peddarapusivashankar@gmail.com" },
  { id: "23FE1A4441", name: "PITCHUKA SIVA NAGA PREETHI", email: "preethipitchuka@gmail.com" },
  { id: "23FE1A4442", name: "PURAM SAI TEJA", email: "puramsaiteja52@gmail.com" },
  { id: "23FE1A4443", name: "PUSULURU MADHU", email: "madhupusuluru@gmal.com" },
  { id: "23FE1A4445", name: "ROBBIESON DEEPATI", email: "robbieson31@gmail.com" },
  { id: "23FE1A4446", name: "SAMANTHAPUDI V S BRAHMA TEJA", email: "samanthapudivsbrahmateja46@gmail.com" },
  { id: "23FE1A4447", name: "SHAIK INAYATULLAH", email: "shaikinayatullah906@gmail.com" },
  { id: "23FE1A4448", name: "SHAIK MEERAVALI", email: "meeravalishaik230@gmail.com" },
  { id: "23FE1A4449", name: "SHAIK MOHAMMAD RAFI", email: "shaikrafi37170@gmail.com" },
  { id: "23FE1A4451", name: "SHAIK SOWMYA", email: "sowmyashaik1@gmail.com" },
  { id: "23FE1A4452", name: "SUDDAPALLI MAHESH", email: "maheshsuddapalli99@gmail.com" },
  { id: "23FE1A4453", name: "TALLAPANENI BHUMIKA", email: "bhumikatallapaneni09@gmail.com" },
  { id: "23FE1A4454", name: "TELLAMEKALA PURNA NAGA SHANMUKH", email: "shanmukhtellamekala@gmail.com" },
  { id: "23FE1A4455", name: "THEEDA HARIDEEP", email: "theedaharideep@gmail.com" },
  { id: "23FE1A4456", name: "THUMMALAPALLI SUSMITHA", email: "susmithathummalapalli257@gmail.com" },
  { id: "23FE1A4457", name: "THURIMELLA ROHITH", email: "rohitthurimella13@gmail.com" },
  { id: "23FE1A4460", name: "VENKATA SAI SUSHANTH GARAPATI", email: "sushanthgarapati02@gmail.com" },
  { id: "23FE1A4461", name: "VISHNUMOLAKALA MANI GOPAL", email: "manigopal.dev@gmail.com" },
  { id: "23FE1A4464", name: "YELISETTY SRILOKESH", email: "srilokeshyelisetty212@gmail.com" },
  { id: "23FE1A4465", name: "VELPURI TEJA VENKATA ANJANEYA KUMAR", email: "tejavelpuri56@gmail.com" },
  { id: "23FE1A4466", name: "KOLLA CHARAN AKASH", email: "kollacharanakash@gmail.com" },
  { id: "23FE1A4467", name: "CHINTALAPUDI RESHMA", email: "reshmachintalapudi@gmail.com" },
  { id: "23FE1A6101", name: "ADINA NARENDRA", email: "narendraadina24@gmail.com" },
  { id: "23FE1A6102", name: "ANGIREKULA PARDHAV SAI", email: "pardhavsai.15@gmail.com" },
  { id: "23FE1A6103", name: "AVULA LAKSHMI POTHURAJU", email: "avulalakshmipothuraju@gmail.com" },
  { id: "23FE1A6105", name: "BEDUDURU LAKSHMI GEETHIKA", email: "geethikabeduduri@gmail.com" },
  { id: "23FE1A6106", name: "BEJJIPURAM SIVA", email: "sivabejjipuram2005@gamil.com" },
  { id: "23FE1A6108", name: "BHUKYA RAMA CHANDRA NAYAK", email: "rcnbhukya@gmail.com" },
  { id: "23FE1A6111", name: "CHEBROLU SANDEEP", email: "chebster2006@gmail.com" },
  { id: "23FE1A6112", name: "CHENNUBOINA BHAVYA SRI SAI AMBIKA", email: "bhavyachennuboina@gmail.com" },
  { id: "23FE1A6113", name: "CHINTALAPUDI SAI", email: "chinthlapudisai1234@gmail.com" },
  { id: "23FE1A6114", name: "DANDA PALLAVI", email: "pallavidanda8@gmail.com" },
  { id: "23FE1A6115", name: "DARMISETTY KALADHAR ROYAL", email: "kaladharroyal@gmail.com" },
  { id: "23FE1A6116", name: "DASARI SASIGOPAL", email: "dsasigopal@gmail.com" },
  { id: "23FE1A6117", name: "DONTHAMSETTY TEJASWINI", email: "donthamsettytejaswini@gmail.com" },
  { id: "23FE1A6119", name: "GOSE SWETHA", email: "swethag1833@gmail.com" },
  { id: "23FE1A6120", name: "GUDE TRIVENI", email: "trivenigude0703@gmail.com" },
  { id: "23FE1A6121", name: "JADA SAMEL RAJU", email: "jadaraju817@gmail.com" },
  { id: "23FE1A6123", name: "JINKA PADMA", email: "jinkapadma2005@gmail.com" },
  { id: "23FE1A6125", name: "KAYALA YASASWINI", email: "yasaswinikayala24@gmail.com" },
  { id: "23FE1A6127", name: "KONDAMADUGULA AJAY VARDHAN REDDY", email: "kondamadugulaajayvardhan@gmail.com" },
  { id: "23FE1A6128", name: "KONDAPATURI JAHNAVI", email: "Kondapaturijahnavi@gmail.com" },
  { id: "23FE1A6129", name: "KOPPULA BHUVAN TEJ", email: "koppulabhuvantej@gmail.com" },
  { id: "23FE1A6131", name: "MAMIDIPAKA VARUN NAGASAI", email: "varunnagasaimamidipaka@gmail.com" },
  { id: "23FE1A6132", name: "MARPU MANOJ KUMAR", email: "marpumintu11@gmail.com" },
  { id: "23FE1A6133", name: "MATTAPALLI KAVYA", email: "kavyamattapalli323@gmail.com" },
  { id: "23FE1A6134", name: "MOPIDEVI ABHIRAM CHARAN", email: "abhirammopidevi74@gmail.com" },
  { id: "23FE1A6135", name: "MUKIRIPI SATHWIK", email: "sathwik4550@gmail.com" },
  { id: "23FE1A6136", name: "NAGA BHAVYA SRI RAJAVARAPU", email: "rajavarapubhavyasri@gmail.coma" },
  { id: "23FE1A6137", name: "NAGARATTHUGARI HABEEBA", email: "habeebanagarathugari@gmail.com" },
  { id: "23FE1A6138", name: "PANCHUMARTHI SATYA PRAKASH", email: "satyanani136@gmail.com" },
  { id: "23FE1A6139", name: "PASUPULETI MOUNIKA", email: "mounip2006@gmail.com" },
  { id: "23FE1A6140", name: "PERUBOINA SUMANTH", email: "sumanthyadav54o@gmail.com" },
  { id: "23FE1A6141", name: "PITTI JAGADEESH", email: "jagadeeshpitti@gmail.com" },
  { id: "23FE1A6143", name: "PRATTIPATI KAVYA", email: "kavyachoudary3@gmail.com" },
  { id: "23FE1A6144", name: "PULIVARTHI SAHITHI", email: "pulivarthisahithi25@gmail.com" },
  { id: "23FE1A6145", name: "PULIVARTHI SRAVANI", email: "sravanipulivarthi2004@gmail.com" },
  { id: "23FE1A6146", name: "PURAMA NANDANA LAKSHMI", email: "ppuramanandana@gmail.com" },
  { id: "23FE1A6147", name: "RAAVI VINAY", email: "vinayraavi143@gmail.com" },
  { id: "23FE1A6149", name: "SEELAM YAMUNA", email: "yamunaseelam55@gmail.com" },
  { id: "23FE1A6151", name: "SHAIK HABIMUNNISA", email: "habishaik046@gmail.com" },
  { id: "23FE1A6153", name: "SHAIK RIYAZ", email: "riyazshaik2113@gmail.com" },
  { id: "23FE1A6155", name: "SHAIK UMAR SOHEL", email: "umarsohel528@gmail.com" },
  { id: "23FE1A6156", name: "SOMAROUTHU SINDHUJA LAKSHMI", email: "s.sindhu210506@gmail.com" },
  { id: "23FE1A6158", name: "TUMMURI MANOGNA SAI", email: "manognasaitummuri@gmail.com" },
  { id: "23FE1A6159", name: "VALLURI MOUNIKA", email: "mounivalluri2006@gmail.com" },
  { id: "23FE1A6160", name: "VEDAPRIYA NAGASAI NADENDLA", email: "vedapriya369@gmail.com" },
  { id: "23FE1A6163", name: "JANGA MANU", email: "manu163563@gmail.com" },
  { id: "23FE1A6164", name: "NENAVATHU MAHESH NAIK", email: "n.maheshnaik@gmail.com" },
  { id: "24FE5A0101", name: "ALLU DHARMA RAO", email: "alludharma42@gmail.com" },
  { id: "24FE5A0103", name: "ANNAM MEGHANA", email: "annammeghana2910@gmail.com" },
  { id: "24FE5A0104", name: "BADDI VENKATA DURGA BHAVANI", email: "baddivenkatdurgabhavani@gmail.com" },
  { id: "24FE5A0105", name: "BANDI SIVAIAH", email: "sivayadav7821@gmail.com" },
  { id: "24FE5A0106", name: "BETHAPUDI PRADEEP", email: "bethapudipradeep3@gmail.com" },
  { id: "24FE5A0107", name: "BODDU PHANENDRA", email: "phanendraboddu7@gmail.com" },
  { id: "24FE5A0108", name: "CHOLLANGI RAMCHARAN", email: "ramchollangi164@gmail.com" },
  { id: "24FE5A0109", name: "DEVARAKONDA SANDHYA RANI", email: "devarakondasandhyarani99@gmail.com" },
  { id: "24FE5A0110", name: "DOLA HEMANTH", email: "dolahemanth09@gmail.com" },
  { id: "24FE5A0111", name: "ERAPANI VENKATA MANI SANKAR", email: "m7303810@gmail.com" },
  { id: "24FE5A0112", name: "GUJJULA SAI KRISHNA VENI", email: "saikrishnavenig@gmail.com" },
  { id: "24FE5A0113", name: "SARNALA KARTHIK", email: "karthiksarnala88@gmail.com" },
  { id: "24FE5A0114", name: "KANCHI MEENAKSHI", email: "kanchimeenakshi2005@gmail.com" },
  { id: "24FE5A0115", name: "KARIMINENI MUNI PAVAN KUMAR", email: "kmunipavankumar@gmail.com" },
  { id: "24FE5A0116", name: "KARRE BALA KRISHNA", email: "balakrishnakarre05@gmail.com" },
  { id: "24FE5A0117", name: "KOMMANAPALLI HARSHAVARDHAN", email: "harshavardhankommanapalli9611@gmail.com" },
  { id: "24FE5A0118", name: "KUPPILI YASWANTH KUMAR", email: "yaswanth081.k@gmail.com" },
  { id: "24FE5A0119", name: "LANDA ANANDA RAO", email: "anandlanda1@gmail.com" },
  { id: "24FE5A0120", name: "MADUGULA CHANDU", email: "chandumadugula123@gmail.com" },
  { id: "24FE5A0121", name: "MALISETTY PARDHA VENKATA ESWAR", email: "malisettipardhu@gmail.com" },
  { id: "24FE5A0122", name: "MEDA GOPI", email: "gopimeda91@gmail.com" },
  { id: "24FE5A0123", name: "MUTHYALA SAI BALAJI", email: "saibalajimuthyala@gmail.com" },
  { id: "24FE5A0124", name: "NANDIKOLLA PAVITHRA GANGA", email: "wwwpavithra342@gmail.com" },
  { id: "24FE5A0125", name: "NUNE ALEKHYA", email: "nunealekhya025@gmail.com" },
  { id: "24FE5A0126", name: "PALAPARTHI SUSMITHA", email: "mallelasusmitha36@gmail.com" },
  { id: "24FE5A0127", name: "RAVURI MEGHANA", email: "meghanaprasad155@gmail.com" },
  { id: "24FE5A0128", name: "VENKATA MAHESH KUMAR KUKKALA", email: "mahesh11ramv@gmail.com" },
  { id: "24FE5A0201", name: "AKULA SRINIVAS", email: "asrinivas5838@gmail.com" },
  { id: "24FE5A0202", name: "CHINNALA MOHANARAO", email: "chinnalamohan777@gmail.com" },
  { id: "24FE5A0203", name: "CHORAGUDI RAJA SEKHAR", email: "choragudirajasekhar9@gmail.com" },
  { id: "24FE5A0204", name: "GOLI SUVARNA KUMAR", email: "golisuvarnakumar@gmail.com" },
  { id: "24FE5A0205", name: "INDLA BHASKAR KUMAR", email: "bhaskarkumar4691@gmail.com" },
  { id: "24FE5A0206", name: "MARAM LAKSHMINARAYANA", email: "maramlakshminarayana15@gmail.com" },
  { id: "24FE5A0207", name: "OMMI  HARSHA VARDHAN", email: "harshavardhanommi20@gmail.com" },
  { id: "24FE5A0208", name: "SEGINENI DINESH", email: "seginenidinesh2019@gmail." },
  { id: "24FE5A0209", name: "PODDOKU VENU", email: "poddokuvenu@gmail.com" },
  { id: "24FE5A0210", name: "R ANJANEYULU NAIK", email: "anjiramavath10@gmail.com" },
  { id: "24FE5A0211", name: "SHAIK NAZEER", email: "nazeermunna22shaik@gmail.com" },
  { id: "24FE5A0212", name: "THADELA SAI KUMAR", email: "saithadela3@gmail.com" },
  { id: "24FE5A0213", name: "TURAKA RAMYA KIRANMAI", email: "turakaramyakiranmai@gmail.com" },
  { id: "24FE5A0214", name: "YADAVALLI LAYA NAGA SRI", email: "layanagasri@gmail.com" },
  { id: "24FE5A0215", name: "YEADUMALLA RANJITH KUMAR", email: "ranjithkumaryeadumalla1120@gmail.com" },
  { id: "24FE5A0301", name: "AGNIPARTHI VENKATA SAI", email: "venkatasai8712@gmail.com" },
  { id: "24FE5A0302", name: "BADDULA SAI PHANEENDHAR KUMAR", email: "saiphanindrakumar4368@gmail.com" },
  { id: "24FE5A0303", name: "BADUGU KARUNAKAR", email: "kkarunakar920@gmail.com" },
  { id: "24FE5A0304", name: "BAGATI TARUN", email: "bagatitarun@gmail.com" },
  { id: "24FE5A0305", name: "BHEEMISETTI YATHIN", email: "bheemisettiyathin123@gmail.com" },
  { id: "24FE5A0306", name: "BOJANKI TEJA", email: "tejabojanki770@gmail.com" },
  { id: "24FE5A0307", name: "CHANDALA LNS SASI KIRAN", email: "saimech747@gmail.com" },
  { id: "24FE5A0308", name: "CHAPPIDI KARTHEEK VAMSI", email: "adityakarthik369@gmail.com" },
  { id: "24FE5A0309", name: "CHITTURI ESWAR SAI", email: "eswarsai9912@gmail.com" },
  { id: "24FE5A0311", name: "DARA SURYA TEJA", email: "suryatejadara9876@gmail.com" },
  { id: "24FE5A0312", name: "GOLLAPOTHU SRINIVAS", email: "srinivasgollapothu@gmail.com" },
  { id: "24FE5A0313", name: "INUMARTHI RUDHRA VENKATA SATYA VINAY", email: "inumarthivinay20005@gmail.com" },
  { id: "24FE5A0314", name: "JALLI SANJAY", email: "sanjayjalli74@gmali.con" },
  { id: "24FE5A0315", name: "JONNA AAMOSE", email: "aamosejonna5@gmail.com" },
  { id: "24FE5A0316", name: "KAKANI MANOJ BABU", email: "kakanimanojbabu28@gmail.com" },
  { id: "24FE5A0317", name: "KALABATHULA ABHI", email: "kalabathulaabhi4561@gmail.com" },
  { id: "24FE5A0318", name: "KARRI THARUN", email: "ramaraokarri12345@gmail.com" },
  { id: "24FE5A0319", name: "KARTHIK BANDIGALLA", email: "bandikallakanakaiaha@gmail.com" },
  { id: "24FE5A0320", name: "KATIKALA VENKATA REDDY", email: "katikalavenkatareddy@gmail.com" },
  { id: "24FE5A0321", name: "KOLLA HEMANTH KUMAR", email: "khemanthkumar2002@gmail.com" },
  { id: "24FE5A0322", name: "KOMATI ABHI RAM", email: "abannu94@gmail.com" },
  { id: "24FE5A0323", name: "KONTHALA HIMESH", email: "konthalahimesh@gmail.com" },
  { id: "24FE5A0324", name: "KOPANATHI NAVEEN", email: "naveenkopanathi666@gmail.com" },
  { id: "24FE5A0325", name: "KOTA AKESWARARAO", email: "akeshkotakeshkota@gmail.com" },
  { id: "24FE5A0326", name: "KOYYA PREM CHANDU", email: "premchanduk893@gmail.com" },
  { id: "24FE5A0327", name: "MEDISETTI MANOHAR", email: "madisettimanohar56@gmail.com" },
  { id: "24FE5A0328", name: "MOHAMMAD IRFAN", email: "irfhanmd037@gmail.com" },
  { id: "24FE5A0331", name: "PAMARTHI YASWANTH CHANDRA", email: "pyaswanthchandra@gmail.com" },
  { id: "24FE5A0332", name: "PATAN SUHEL", email: "patansuhel62@gmail.com" },
  { id: "24FE5A0334", name: "PULIPATI VIJAYA BALA KRISHNA", email: "vijayabalakrishna1622211@gmail.com" },
  { id: "24FE5A0335", name: "PUVVADA VENKATA SAI TEJA", email: "puvvadasaiteja@gmail.com" },
  { id: "24FE5A0336", name: "REDDI VASU DEMULLU VAMSI", email: "vamsireddy1635@gmail.com" },
  { id: "24FE5A0337", name: "SALAPU VENKAT", email: "venkatsalapu99@gmail.com" },
  { id: "24FE5A0338", name: "SAMMETA ABHILASH", email: "sammetaabhilashabhi@gmail.com" },
  { id: "24FE5A0339", name: "SINGAMPALLI NIVESH", email: "nivesh709@gmail.com" },
  { id: "24FE5A0340", name: "SK NAGOOR VALI", email: "valinagoor347@gmail.com" },
  { id: "24FE5A0341", name: "SURLA VIJAYA SURYANARAYANA", email: "surlavijay15@gmail.com" },
  { id: "24FE5A0342", name: "TALABATTULA RAVITEJA", email: "ravisuresh432@gmail.com" },
  { id: "24FE5A0343", name: "TALLA SHANMUKHARAO", email: "talla.shanmukharao143@gmail.com" },
  { id: "24FE5A0344", name: "TARRA JASHUVA", email: "jacktarra18@gmail.com" },
  { id: "24FE5A0346", name: "THUNGA CHARAN KUMAR REDDY", email: "thungacharankumarreddy365@gmail.com" },
  { id: "24FE5A0347", name: "TIRUKOTI CHARAN", email: "tirukoticharan7777@gmail.com" },
  { id: "24FE5A0348", name: "USSA PRANESH", email: "upranesh2929@gmail.com" },
  { id: "24FE5A0349", name: "VARADA DURGA VENKATA SIVA CHAITANYA SRINIVAS", email: "varadasrinivas198@gmail.com" },
  { id: "24FE5A0401", name: "GALLE VIJAY", email: "vijaygalle0001@gmail.com" },
  { id: "24FE5A0402", name: "GORIPARTI SRI KANAKA DURGA", email: "goriparthisrikanakadurga@gmail.com" },
  { id: "24FE5A0403", name: "GUNDRU NARESH", email: "nareshgundru9154@gmail.com" },
  { id: "24FE5A0404", name: "KANKANALAPATI YASWANTH", email: "yaswanthkankanalapati123@gmail.com" },
  { id: "24FE5A0405", name: "KODALI NAGA VEERA BHAVANI", email: "kodalibhavani2004@gmail.com" },
  { id: "24FE5A0406", name: "KUKKAMALLA RISHITHA", email: "krishitha0666@gmail.com" },
  { id: "24FE5A0407", name: "MEKATHOTI RATNA VAMSI", email: "ratnavamsi882@gmail.com" },
  { id: "24FE5A0408", name: "NENAVATH MAHENDRA BABU", email: "mahendranenavath3@gmail.com" },
  { id: "24FE5A0409", name: "PALEPU TEJESH", email: "paleputejesh@gmail.com" },
  { id: "24FE5A0410", name: "PATHAN ASHI", email: "pathanashi06@gmail.com" },
  { id: "24FE5A0411", name: "PATHURI KOUSHIK KARUN", email: "koushikpathuriofficial@gmail.com" },
  { id: "24FE5A0412", name: "PILLUTLA SAI SANJANA", email: "saisanjana172005@gmail.com" },
  { id: "24FE5A0413", name: "RUDRU HARSHAVARDHAN", email: "harshavardhanrudru191@gmail.com" },
  { id: "24FE5A0414", name: "ALAPATI LEELA VENKATA SAI", email: "leelasaia001@gmail.com" },
  { id: "24FE5A0415", name: "SHAIK MAGDUM", email: "magdumshaik082005@gmail.com" },
  { id: "24FE5A0416", name: "SHAIK SHAPHEER", email: "shaikshapheer@gmail.com" },
  { id: "24FE5A0417", name: "VATTIGUNTA VENKATESWARLU", email: "venkyvattigunta@gmail.com" },
  { id: "24FE5A0418", name: "VURAYAMINI", email: "vurayamini2006@gmail.com" },
  { id: "24FE5A0419", name: "KUKKALA HIRANYA", email: "khiranyareddy87@gmail.com" },
  { id: "24FE5A0420", name: "SANDU RAHUL", email: "sandhurahul52005@gmail.com" },
  { id: "24FE5A0421", name: "PAPPU BHUVANESWARI", email: "bhuvana.p982005@gmail.com" },
  { id: "24FE5A0501", name: "ADUGULA RAJESH KUMAR", email: "rajeshkumaradugula2084@gmail.com" },
  { id: "24FE5A0502", name: "BANKA BLESSY ANGEL", email: "blessyangelbanka@gmail.com" },
  { id: "24FE5A0503", name: "DUVVARAPU BHAVANI SANKAR", email: "dbs232004@gmail.com" },
  { id: "24FE5A0504", name: "GAJJARAPU SRI VEENA TEJASWINI", email: "sriveenatejaswinigajjarapu@gmail.com" },
  { id: "24FE5A0505", name: "GOTTAM PREMKUMAR", email: "premkumargottam97030@gmail.com" },
  { id: "24FE5A0507", name: "JAMI MEGHANA", email: "meghanajami54@gmail.com" },
  { id: "24FE5A0508", name: "KALAPU VENKATA SATYA NAGENDRA MANI VARMA", email: "manivarmakalapu@gmail.com" },
  { id: "24FE5A0509", name: "KATTUPALLI ABHIGNA", email: "abhignakattupalli@gmail.com" },
  { id: "24FE5A0510", name: "KOKKILIGADDA CHANDU", email: "kokkiligaddachandu56@gmail.com" },
  { id: "24FE5A0511", name: "LANKOJI LEELA VENKATA PARAMESWARI", email: "leelalankoji@gmail.com" },
  { id: "24FE5A0512", name: "MEKALA TIRUPATHAMMA", email: "tirupathammam631@gmail.com" },
  { id: "24FE5A0514", name: "MUNIPALLI SANTHOSH", email: "santhoshmunipalli@gmail.com" },
  { id: "24FE5A0520", name: "SHAIK MOHAMMAD THOUSIF", email: "skthousif47@gmail.com" },
  { id: "24FE5A0522", name: "TULLIMILLI ESWAR VENKAT SESHU", email: "eswarvenket@gmail.com" },
  { id: "24FE5A0525", name: "DEVARAKONDA VENKATA RAMANA", email: "devarakondavenkataramana329@gmail.com" },
  { id: "24FE5A1201", name: "BUDDAVARAPU VAYANANDANA", email: "vayanandanabud@gmail.com" },
  { id: "24FE5A1203", name: "JANGILI SIVA LEELA", email: "sivaleelajangili53@gmail.com" },
  { id: "24FE5A1204", name: "KUNCHAKARLA VIJAY KUMAR", email: "kunchakarlavijay9966@gmail.com" },
  { id: "24FE5A1206", name: "SHAIK RIHAN", email: "rihan.shaik31278e@gmail.com" },
  { id: "24FE5A1207", name: "VELPULA MAHESH BABU", email: "velpula161@gamil.com" },
  { id: "24FE5A4202", name: "BATTHULA ESHWAR", email: "batthulaeshwar2006@gmail.com" },
  { id: "24FE5A4203", name: "PALAPARTHI MOUNIKA", email: "mounikapalaparthi56@gmail.com" },
  { id: "24FE5A4204", name: "RACHABATHUNI LALITHA", email: "lalli11230895@gmail.com" },
  { id: "24FE5A4206", name: "VANUM KRISHNA TEJA", email: "krishnateja0970@gmail.com" },
  { id: "24FE5A4207", name: "PEDAPUDI YASWANTH", email: "pedapudiyaswanth001@gmail.com" },
  { id: "24FE5A4301", name: "ARAVEETI SHIVAKOTESWARAO", email: "sivaaraveeti12@gmail.com" },
  { id: "24FE5A4302", name: "BIKKI DEEPIKA", email: "deepikabikki81@gmail.com" },
  { id: "24FE5A4303", name: "DANABOYINA VENKATESWARA RAO", email: "danaboinavenkatesh14@gmail.com" },
  { id: "24FE5A4304", name: "PATHAN RAHIMA KHATUN", email: "pathanrahima2004@gmail.com" },
  { id: "24FE5A4305", name: "RAVULAPALLI PAVAN KUMAR", email: "ravulapallipavankumar@gmail.com" },
  { id: "24FE5A4306", name: "VEMURI NAGA KRISHNA BRAHMANANDA BABU", email: "v.chintu2245@gmail.com" },
  { id: "24FE5A4402", name: "ILASAGARAPU SRIRAM", email: "sriramilasagarapu@gmail.com" },
  { id: "24FE5A4403", name: "MOPARTHI VIJAYAKUMARI", email: "vijayamoparthi131@gmail.com" },
  { id: "24FE5A4404", name: "PASUPULETI KRISHNA KUMARI", email: "krishnakumari.p2627@gmail.com" },
  { id: "24FE5A4405", name: "REDDYMALLI MOHAN RAGHAVENDRA REDDY", email: "raghavareddy22660@gmail.com" },
  { id: "24FE5A4406", name: "SHAIK MAHAMOOD ANZAR", email: "skmahamoodanzar@gmail.com" },
  { id: "24FE5A4407", name: "VINNAKOTA HIMA NAGA KARTHIKEYA", email: "dsstudent.karthikeya@gmail.com" },
  { id: "24FE5A6101", name: "BELLAMKONDA MADHUHA", email: "madhubellamkonda18@gmail.com" },
  { id: "24FE5A6103", name: "GOVATHOTI DHARANI", email: "govathotidharani2004@gmail.com" },
  { id: "24FE5A6105", name: "SUROJU TEJA", email: "surojuteja77@gmail.com" },
  { id: "24FE5A6106", name: "THAMMISETTI SNEHARSHA", email: "sneharshathammisetty@gmail.com" },
  { id: "24FE5A6107", name: "CHAVA ROHAN VASUDEVA", email: "vasudeva7210@gmail.com" }
];


// ─── CODING SHEET DATA ───────────────────────────────────────────────────────
const topics = [
  {
    id: "arrays",
    name: "Arrays",
    icon: "▦",
    digitalWeight: 20,
    primeWeight: 16,
    tier: 1,
    color: "#4338CA",
    bg: "#EEF2FF",
    border: "#C7D2FE",
    problems: [
      { id: 1, name: "Maximum Subarray Sum (Kadane's)", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 2, name: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 3, name: "Leaders in an Array", link: "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 4, name: "Find Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 5, name: "Rotate Array by K Steps", link: "https://leetcode.com/problems/rotate-array/", difficulty: "Medium", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 6, name: "Best Time to Buy & Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
      { id: 7, name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 8, name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy", digitalProb: "High", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 9, name: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Important" },
      { id: 10, name: "Subarray with Given Sum (Sliding Window)", link: "https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "Added", tag: "Must Do" },
      { id: 11, name: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 12, name: "Find Duplicate in Array", link: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
    ],
  },
  {
    id: "strings",
    name: "Strings",
    icon: "✎",
    digitalWeight: 15,
    primeWeight: 12,
    tier: 1,
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    problems: [
      { id: 13, name: "Reverse a String / Words in String", link: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 14, name: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 15, name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 16, name: "Count Character Frequency", link: "https://www.geeksforgeeks.org/problems/frequency-of-characters-in-a-string/1", difficulty: "Easy", digitalProb: "High", primeProb: "Low", source: "PDF", tag: "Must Do" },
      { id: 17, name: "Check if String is Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 18, name: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 19, name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Important" },
      { id: 20, name: "String Compression (Run-Length Encoding)", link: "https://leetcode.com/problems/string-compression/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
      { id: 21, name: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "Added", tag: "Must Do" },
      { id: 22, name: "Roman to Integer / Integer to Roman", link: "https://leetcode.com/problems/roman-to-integer/", difficulty: "Medium", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
    ],
  },
  {
    id: "hashing",
    name: "Hashing",
    icon: "#",
    digitalWeight: 10,
    primeWeight: 9,
    tier: 1,
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    problems: [
      { id: 23, name: "Two Sum (HashMap approach)", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy", digitalProb: "High", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 24, name: "First Non-Repeating Character", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 25, name: "Duplicate Detection in Array", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 26, name: "Subarray with Zero Sum", link: "https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "Added", tag: "Must Do" },
      { id: 27, name: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 28, name: "Count Pairs with Given Sum", link: "https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Important" },
    ],
  },
  {
    id: "sorting",
    name: "Sorting & Binary Search",
    icon: "⇅",
    digitalWeight: 12,
    primeWeight: 10,
    tier: 1,
    color: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
    problems: [
      { id: 29, name: "Search in Sorted Array (Binary Search)", link: "https://leetcode.com/problems/binary-search/", difficulty: "Easy", digitalProb: "High", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 30, name: "First and Last Occurrence of Element", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 31, name: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 32, name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "Added", tag: "Must Do" },
      { id: 33, name: "Sqrt(x) using Binary Search", link: "https://leetcode.com/problems/sqrtx/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
      { id: 34, name: "Kth Largest Element (Quick Select)", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 35, name: "Merge Sort Implementation", link: "https://leetcode.com/problems/sort-an-array/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "PDF", tag: "Important" },
      { id: 36, name: "Find Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
    ],
  },
  {
    id: "math",
    name: "Math & Number Theory",
    icon: "π",
    digitalWeight: 10,
    primeWeight: 5,
    tier: 1,
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    problems: [
      { id: 37, name: "Count Prime Numbers (Sieve of Eratosthenes)", link: "https://leetcode.com/problems/count-primes/", difficulty: "Medium", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
      { id: 38, name: "GCD and LCM", link: "https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
      { id: 39, name: "Reverse an Integer", link: "https://leetcode.com/problems/reverse-integer/", difficulty: "Easy", digitalProb: "High", primeProb: "Low", source: "Added", tag: "Must Do" },
      { id: 40, name: "Check Power of Two / Three", link: "https://leetcode.com/problems/power-of-two/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
      { id: 41, name: "Fibonacci (Iterative + Memoized)", link: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 42, name: "Factorial (Recursive + Iterative)", link: "https://www.geeksforgeeks.org/problems/factorial5739/1", difficulty: "Easy", digitalProb: "High", primeProb: "Low", source: "PDF", tag: "Must Do" },
      { id: 43, name: "Excel Sheet Column Number", link: "https://leetcode.com/problems/excel-sheet-column-number/", difficulty: "Easy", digitalProb: "High", primeProb: "Low", source: "Added", tag: "Important" },
    ],
  },
  {
    id: "linkedlist",
    name: "Linked Lists",
    icon: "⬡",
    digitalWeight: 7,
    primeWeight: 4,
    tier: 2,
    color: "#DB2777",
    bg: "#FDF2F8",
    border: "#FBCFE8",
    problems: [
      { id: 44, name: "Reverse a Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 45, name: "Detect Cycle in Linked List (Floyd's)", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Medium", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 46, name: "Merge Two Sorted Linked Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 47, name: "Find Middle of Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Easy", digitalProb: "High", primeProb: "Low", source: "PDF", tag: "Must Do" },
      { id: 48, name: "Remove Nth Node from End", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Important" },
      { id: 49, name: "Add Two Numbers (as Linked List)", link: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Prime Focus" },
    ],
  },
  {
    id: "stacks",
    name: "Stacks & Queues",
    icon: "☰",
    digitalWeight: 8,
    primeWeight: 6,
    tier: 2,
    color: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
    problems: [
      { id: 50, name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy", digitalProb: "High", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 51, name: "Next Greater Element", link: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 52, name: "Implement Queue using Two Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "PDF", tag: "Must Do" },
      { id: 53, name: "Min Stack (O(1) getMin)", link: "https://leetcode.com/problems/min-stack/", difficulty: "Medium", digitalProb: "High", primeProb: "High", source: "Added", tag: "Must Do" },
      { id: 54, name: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 55, name: "Sliding Window Maximum (Deque)", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 56, name: "Balanced Parentheses Generation", link: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Important" },
    ],
  },
  {
    id: "recursion",
    name: "Recursion & Backtracking",
    icon: "↺",
    digitalWeight: 5,
    primeWeight: 6,
    tier: 2,
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    problems: [
      { id: 57, name: "Generate All Subsets / Power Set", link: "https://leetcode.com/problems/subsets/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 58, name: "Generate All Permutations", link: "https://leetcode.com/problems/permutations/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Must Do" },
      { id: 59, name: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Important" },
      { id: 60, name: "Word Search in Grid", link: "https://leetcode.com/problems/word-search/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 61, name: "Rat in a Maze / Maze Path Problems", link: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 62, name: "Letter Combinations of Phone Number", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
    ],
  },
  {
    id: "bits",
    name: "Bit Manipulation",
    icon: "⊕",
    digitalWeight: 6,
    primeWeight: 2,
    tier: 2,
    color: "#9333EA",
    bg: "#FAF5FF",
    border: "#E9D5FF",
    problems: [
      { id: 63, name: "Single Number (XOR trick)", link: "https://leetcode.com/problems/single-number/", difficulty: "Easy", digitalProb: "High", primeProb: "Medium", source: "Added", tag: "Must Do" },
      { id: 64, name: "Count Number of Set Bits", link: "https://leetcode.com/problems/number-of-1-bits/", difficulty: "Easy", digitalProb: "High", primeProb: "Low", source: "Added", tag: "Must Do" },
      { id: 65, name: "Check if Number is Power of 2", link: "https://leetcode.com/problems/power-of-two/", difficulty: "Easy", digitalProb: "High", primeProb: "Low", source: "Added", tag: "Must Do" },
      { id: 66, name: "Reverse Bits of Integer", link: "https://leetcode.com/problems/reverse-bits/", difficulty: "Easy", digitalProb: "High", primeProb: "Low", source: "Added", tag: "Important" },
      { id: 67, name: "Find Two Non-Repeating Numbers (XOR)", link: "https://leetcode.com/problems/single-number-iii/", difficulty: "Medium", digitalProb: "Medium", primeProb: "Medium", source: "Added", tag: "Important" },
    ],
  },
  {
    id: "dp",
    name: "Dynamic Programming",
    icon: "◈",
    digitalWeight: 2,
    primeWeight: 15,
    tier: 3,
    color: "#CA8A04",
    bg: "#FEFCE8",
    border: "#FEF08A",
    problems: [
      { id: 68, name: "Climbing Stairs (1D DP)", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Must Do" },
      { id: 69, name: "0/1 Knapsack Problem", link: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 70, name: "Longest Common Subsequence (LCS)", link: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 71, name: "Coin Change (Min Coins)", link: "https://leetcode.com/problems/coin-change/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 72, name: "House Robber", link: "https://leetcode.com/problems/house-robber/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Must Do" },
      { id: 73, name: "Longest Increasing Subsequence (LIS)", link: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 74, name: "Fibonacci with Memoization", link: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Easy", digitalProb: "Medium", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 75, name: "Edit Distance (Levenshtein)", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Hard", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 76, name: "Subset Sum Problem", link: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "PDF", tag: "Prime Focus" },
    ],
  },
  {
    id: "trees",
    name: "Trees",
    icon: "🌲",
    digitalWeight: 4,
    primeWeight: 8,
    tier: 3,
    color: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    problems: [
      { id: 77, name: "Inorder / Preorder / Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy", digitalProb: "Medium", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 78, name: "Level Order Traversal (BFS)", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Easy", digitalProb: "Medium", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 79, name: "Height / Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy", digitalProb: "Medium", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 80, name: "Lowest Common Ancestor (LCA)", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 81, name: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "Added", tag: "Important" },
      { id: 82, name: "Check if Binary Tree is Balanced", link: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 83, name: "BST Insert / Search / Delete", link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/", difficulty: "Medium", digitalProb: "Medium", primeProb: "High", source: "PDF", tag: "Important" },
      { id: 84, name: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
    ],
  },
  {
    id: "graphs",
    name: "Graphs",
    icon: "◉",
    digitalWeight: 1,
    primeWeight: 7,
    tier: 4,
    color: "#475569",
    bg: "#F8FAFC",
    border: "#E2E8F0",
    problems: [
      { id: 85, name: "BFS Traversal", link: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1", difficulty: "Easy", digitalProb: "Low", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 86, name: "DFS Traversal", link: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1", difficulty: "Easy", digitalProb: "Low", primeProb: "High", source: "PDF", tag: "Must Do" },
      { id: 87, name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 88, name: "Detect Cycle in Graph (Directed/Undirected)", link: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 89, name: "Topological Sort (Kahn's / DFS)", link: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 90, name: "Shortest Path — BFS / Dijkstra", link: "https://leetcode.com/problems/network-delay-time/", difficulty: "Hard", digitalProb: "Low", primeProb: "High", source: "Added", tag: "Prime Focus" },
      { id: 91, name: "Count Connected Components", link: "https://www.geeksforgeeks.org/problems/connected-components-in-an-undirected-graph/1", difficulty: "Easy", digitalProb: "Low", primeProb: "High", source: "PDF", tag: "Important" },
    ],
  },
];

const diffColor = {
  Easy: { bg: "#F0FDF4", text: "#166534", border: "#BBF7D0" },
  Medium: { bg: "#FFF7ED", text: "#9A3412", border: "#FED7AA" },
  Hard: { bg: "#FEF2F2", text: "#991B1B", border: "#FECACA" },
};
const probColor = {
  High: { bg: "#EEF2FF", text: "#3730A3" },
  Medium: { bg: "#F5F3FF", text: "#5B21B6" },
  Low: { bg: "#F8FAFC", text: "#64748B" },
};
const tagColor = {
  "Must Do": { bg: "#FEF2F2", text: "#DC2626" },
  "Prime Focus": { bg: "#FFF7ED", text: "#C2410C" },
  Important: { bg: "#EEF2FF", text: "#4338CA" },
};
const tierLabel = {
  1: "Must Master",
  2: "Very Important",
  3: "Moderate",
  4: "Low Priority",
};
const tierColor = { 1: "#DC2626", 2: "#D97706", 3: "#059669", 4: "#64748B" };


// ─── LOGIN COMPONENT ────────────────────────────────────────────────────────
function Login({ onLogin, students }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // --- DEBUGGING LOGS (You can see these by Right-Clicking -> Inspect -> Console) ---
    console.log("Total students loaded in app:", students?.length || 0);
    console.log("Attempting login with -> ID:", username, "| Email:", password);
    // --------------------------------------------------------------------------------

    // Check Admin
    if (username.trim() === "VLITSAdmin" && password.trim() === "VLITSAdmin@01") {
      onLogin({ role: "admin" });
      return;
    }

    // Safely Check Student (Prevents crashes if a record is missing an ID or Email)
    const student = (students || []).find((s) => {
      if (!s || !s.id || !s.email) return false; 
      
      // Forces everything to lowercase strings and removes extra spaces
      const matchId = s.id.toString().trim().toLowerCase() === username.trim().toLowerCase();
      const matchEmail = s.email.toString().trim().toLowerCase() === password.trim().toLowerCase();
      
      return matchId && matchEmail;
    });

    if (student) {
      console.log("✅ Login successful for:", student.name);
      onLogin({ role: "student", ...student });
      return;
    }

    console.log("❌ Login failed. No exact match found in the students list.");
    setError("Invalid credentials. Please check your ID and Email.");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0F172A', fontFamily: "'Inter', sans-serif" }}>
      <form onSubmit={handleLogin} style={{ background: '#1E293B', padding: '40px', borderRadius: '12px', width: '320px', border: '1px solid #334155' }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '24px' }}>VLITS Student Login</h2>
        {error && <div style={{ color: '#EF4444', fontSize: '12px', marginBottom: '16px', textAlign: 'center' }}>{error}</div>}
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ color: '#94A3B8', fontSize: '12px', display: 'block', marginBottom: '8px' }}>Student ID</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0F172A', color: 'white', boxSizing: 'border-box' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#94A3B8', fontSize: '12px', display: 'block', marginBottom: '8px' }}>Email Address</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0F172A', color: 'white', boxSizing: 'border-box' }}
            required
          />
        </div>
        
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#4338CA', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Login
        </button>
      </form>
    </div>
  );
}

// ─── ADMIN DASHBOARD COMPONENT ──────────────────────────────────────────────
function AdminDashboard({ onLogout, students, setStudents }) {
  const [form, setForm] = useState({ id: '', name: '', email: '' });
  const [editingId, setEditingId] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      setStudents(students.map(s => s.id === editingId ? { ...form } : s));
      setEditingId(null);
    } else {
      if (students.find(s => s.id === form.id)) return alert("Student ID already exists!");
      setStudents([...students, form]);
    }
    setForm({ id: '', name: '', email: '' });
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditingId(student.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter(s => s.id !== id));
      localStorage.removeItem(`progress_${id}`); // clear their progress data
    }
  };

  return (
    <div style={{ background: '#0F172A', minHeight: '100vh', padding: '40px 20px', fontFamily: "'Inter', sans-serif", color: 'white' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2>Admin Dashboard</h2>
          <button onClick={onLogout} style={{ padding: '8px 16px', background: '#EF4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Logout</button>
        </div>

        <div style={{ background: '#1E293B', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
          <h3>{editingId ? "Edit Student" : "Add New Student"}</h3>
          <form onSubmit={handleSave} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input type="text" placeholder="Student ID" value={form.id} disabled={!!editingId} onChange={e => setForm({...form, id: e.target.value})} required style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0F172A', color: 'white' }} />
            <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0F172A', color: 'white' }} />
            <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0F172A', color: 'white' }} />
            <button type="submit" style={{ padding: '10px 20px', background: '#22C55E', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>{editingId ? "Update" : "Add"}</button>
            {editingId && <button type="button" onClick={() => {setEditingId(null); setForm({id:'', name:'', email:''});}} style={{ padding: '10px 20px', background: '#64748B', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>}
          </form>
        </div>

        <div style={{ background: '#1E293B', borderRadius: '10px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#334155' }}>
                <th style={{ padding: '12px 16px' }}>Student ID</th>
                <th style={{ padding: '12px 16px' }}>Name</th>
                <th style={{ padding: '12px 16px' }}>Email</th>
                <th style={{ padding: '12px 16px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr><td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: '#94A3B8' }}>No students added yet.</td></tr>
              ) : (
                students.map(s => (
                  <tr key={s.id} style={{ borderTop: '1px solid #334155' }}>
                    <td style={{ padding: '12px 16px' }}>{s.id}</td>
                    <td style={{ padding: '12px 16px' }}>{s.name}</td>
                    <td style={{ padding: '12px 16px' }}>{s.email}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <button onClick={() => handleEdit(s)} style={{ marginRight: '8px', padding: '6px 12px', background: '#3B82F6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleDelete(s.id)} style={{ padding: '6px 12px', background: '#EF4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── STUDENT VIEW ───────────────────────────────────────────────────────────
function StudentSheet({ student, onLogout }) {
  const [mode, setMode] = useState("digital");
  const [filter, setFilter] = useState("All");
  const [diffFilter, setDiffFilter] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [activeTab, setActiveTab] = useState("sheet");

  // Load specific student progress from LocalStorage
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem(`progress_${student.id}`);
    return saved ? JSON.parse(saved) : {};
  });

  // Save specific student progress to LocalStorage
  useEffect(() => {
    localStorage.setItem(`progress_${student.id}`, JSON.stringify(checked));
  }, [checked, student.id]);

  const totalProblems = topics.reduce((a, t) => a + t.problems.length, 0);
  const doneCount = Object.values(checked).filter(Boolean).length;

  const filteredTopics = topics
    .map((t) => ({
      ...t,
      problems: t.problems.filter((p) => {
        const tagOk = filter === "All" || p.tag === filter || (filter === "PDF Only" && p.source === "PDF") || (filter === "Added" && p.source === "Added");
        const diffOk = diffFilter === "All" || p.difficulty === diffFilter;
        return tagOk && diffOk;
      }),
    }))
    .filter((t) => t.problems.length > 0);

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const topicDone = (topic) => topic.problems.filter((p) => checked[p.id]).length;

  const mustDo = topics.flatMap((t) => t.problems).filter((p) => p.tag === "Must Do").length;
  const primeFocus = topics.flatMap((t) => t.problems).filter((p) => p.tag === "Prime Focus").length;
  const fromPDF = topics.flatMap((t) => t.problems).filter((p) => p.source === "PDF").length;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0F172A", minHeight: "100vh", paddingBottom: 48 }}>
      
      {/* Student Welcome & Logout Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', background: '#020617', borderBottom: '1px solid #1E293B' }}>
        <div style={{ color: '#94A3B8', fontSize: '14px' }}>
          Welcome, <strong style={{ color: 'white' }}>{student.name}</strong> ({student.id})
        </div>
        <button onClick={onLogout} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>
          Logout
        </button>
      </div>

      <div style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #312E81 100%)", padding: "28px 20px 0", textAlign: "center", borderBottom: "1px solid #1E293B" }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#818CF8", marginBottom: 6, textTransform: "uppercase" }}>Curated Problem Sheet</div>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: "white", letterSpacing: -0.5 }}>TCS Coding Sheet</h1>
        <p style={{ margin: "6px 0 16px", fontSize: 13, color: "#94A3B8" }}>{totalProblems} problems · Curated from PDF + Expert additions</p>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
          {[
            ["✅", doneCount, "Completed", "#22C55E"],
            ["🎯", mustDo, "Must Do", "#EF4444"],
            ["🔥", primeFocus, "Prime Focus", "#F97316"],
            ["📄", fromPDF, "From PDF", "#818CF8"],
          ].map(([icon, count, label, color]) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "8px 14px", textAlign: "center", minWidth: 70 }}>
              <div style={{ fontSize: 16 }}>{icon}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color }}>{count}</div>
              <div style={{ fontSize: 10, color: "#64748B" }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 400, margin: "0 auto 18px", background: "rgba(255,255,255,0.08)", borderRadius: 20, height: 6, overflow: "hidden" }}>
          <div style={{ width: `${(doneCount / totalProblems) * 100}%`, height: "100%", background: "linear-gradient(90deg, #6366F1, #8B5CF6)", borderRadius: 20, transition: "width 0.3s" }} />
        </div>
        <div style={{ fontSize: 12, color: "#64748B", marginBottom: 16 }}>
          {doneCount}/{totalProblems} solved ({Math.round((doneCount / totalProblems) * 100)}%)
        </div>

        <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.08)", borderRadius: 30, padding: 4, gap: 4, marginBottom: 16 }}>
          {["digital", "prime"].map((m) => (
            <button key={m} onClick={() => setMode(m)} style={{ padding: "7px 20px", borderRadius: 24, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, transition: "all 0.2s", background: mode === m ? "white" : "transparent", color: mode === m ? "#1E1B4B" : "rgba(255,255,255,0.6)" }}>
              TCS {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {[
            ["sheet", "📋 Problem Sheet"],
            ["summary", "📊 Topic Summary"],
          ].map(([key, label]) => (
            <button key={key} onClick={() => setActiveTab(key)} style={{ flex: 1, padding: "12px 8px", border: "none", background: "none", fontWeight: 600, fontSize: 13, cursor: "pointer", color: activeTab === key ? "#818CF8" : "#64748B", borderBottom: activeTab === key ? "2px solid #818CF8" : "2px solid transparent" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 14px" }}>
        {activeTab === "sheet" && (
          <>
            <div style={{ padding: "14px 0 10px", display: "flex", gap: 6, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {["All", "Must Do", "Prime Focus", "Important", "PDF Only", "Added"].map((f) => (
                  <button key={f} onClick={() => setFilter(f)} style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${filter === f ? "#818CF8" : "#1E293B"}`, background: filter === f ? "#1E293B" : "transparent", color: filter === f ? "#818CF8" : "#64748B", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{f}</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {["All", "Easy", "Medium", "Hard"].map((d) => (
                  <button key={d} onClick={() => setDiffFilter(d)} style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${diffFilter === d ? "#818CF8" : "#1E293B"}`, background: diffFilter === d ? "#1E293B" : "transparent", color: diffFilter === d ? "#818CF8" : "#64748B", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{d}</button>
                ))}
              </div>
            </div>

            {filteredTopics.map((topic) => {
              const isOpen = expandedTopic === topic.id;
              const done = topicDone(topic);
              const total = topic.problems.length;
              const pct = total > 0 ? (done / total) * 100 : 0;
              const weight = mode === "digital" ? topic.digitalWeight : topic.primeWeight;

              return (
                <div key={topic.id} style={{ background: "#1E293B", borderRadius: 14, border: `1px solid #334155`, marginBottom: 10, overflow: "hidden" }}>
                  <button onClick={() => setExpandedTopic(isOpen ? null : topic.id)} style={{ width: "100%", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: topic.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: topic.color, fontWeight: 800, flexShrink: 0 }}>{topic.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9" }}>{topic.name}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: tierColor[topic.tier], background: `${tierColor[topic.tier]}20`, padding: "2px 8px", borderRadius: 10 }}>Tier {topic.tier}</span>
                        <span style={{ fontSize: 12, fontWeight: 800, color: topic.color }}>{weight}% weight</span>
                      </div>
                      <div style={{ marginTop: 6, height: 3, background: "#334155", borderRadius: 4, width: "100%", overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: topic.color, borderRadius: 4, transition: "width 0.3s" }} />
                      </div>
                      <div style={{ fontSize: 11, color: "#64748B", marginTop: 3 }}>{done}/{total} solved</div>
                    </div>
                    <span style={{ color: "#475569", fontSize: 18 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>

                  {isOpen && (
                    <div style={{ borderTop: "1px solid #334155" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "28px 1fr 70px 60px 60px 70px", gap: 8, padding: "8px 16px", background: "#0F172A" }}>
                        {["", "Problem", "Diff", "Digital", "Prime", "Tag"].map((h) => (
                          <div key={h} style={{ fontSize: 10, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</div>
                        ))}
                      </div>

                      {topic.problems.map((p, i) => {
                        const dc = diffColor[p.difficulty];
                        const tc = tagColor[p.tag];
                        const isDone = checked[p.id];
                        return (
                          <div key={p.id} onClick={() => toggle(p.id)} style={{ display: "grid", gridTemplateColumns: "28px 1fr 70px 60px 60px 70px", gap: 8, padding: "10px 16px", borderTop: "1px solid #1E293B", alignItems: "center", cursor: "pointer", background: isDone ? "rgba(34,197,94,0.06)" : i % 2 === 0 ? "#1E293B" : "#172033", transition: "background 0.15s" }}>
                            <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${isDone ? "#22C55E" : "#334155"}`, background: isDone ? "#22C55E" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}>
                              {isDone && <span style={{ color: "white", fontSize: 12, fontWeight: 900 }}>✓</span>}
                            </div>
                            <div>
                              <a href={p.link || `https://www.google.com/search?q=${encodeURIComponent(p.name + " LeetCode")}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ fontSize: 13, color: isDone ? "#64748B" : "#60A5FA", fontWeight: 500, textDecoration: isDone ? "line-through" : "none" }}>{p.name}</a>
                              {p.source === "PDF" && <span style={{ marginLeft: 6, fontSize: 9, color: "#818CF8", border: "1px solid #3730A3", borderRadius: 4, padding: "1px 4px", verticalAlign: "middle" }}>PDF</span>}
                            </div>
                            <div><span style={{ fontSize: 11, fontWeight: 700, color: dc.text, background: dc.bg, padding: "2px 7px", borderRadius: 8 }}>{p.difficulty}</span></div>
                            <div style={{ fontSize: 11, color: p.digitalProb === "High" ? "#22C55E" : p.digitalProb === "Medium" ? "#F59E0B" : "#475569", fontWeight: 600 }}>{p.digitalProb}</div>
                            <div style={{ fontSize: 11, color: p.primeProb === "High" ? "#22C55E" : p.primeProb === "Medium" ? "#F59E0B" : "#475569", fontWeight: 600 }}>{p.primeProb}</div>
                            <div><span style={{ fontSize: 10, fontWeight: 700, color: tc.text, background: tc.bg, padding: "2px 6px", borderRadius: 8 }}>{p.tag}</span></div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}

        {activeTab === "summary" && (
          <div style={{ marginTop: 16 }}>
            <div style={{ background: "#1E293B", borderRadius: 14, border: "1px solid #334155", overflow: "hidden", marginBottom: 14 }}>
              <div style={{ padding: "14px 18px", borderBottom: "1px solid #334155" }}><div style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9" }}>📊 Topic Weightage — TCS {mode === "digital" ? "Digital" : "Prime"}</div></div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.7fr 0.8fr 0.6fr", gap: 8, padding: "10px 18px", background: "#0F172A" }}>
                {["Topic", "Weight", "Tier", "Problems", "Done"].map((h) => (<div key={h} style={{ fontSize: 10, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 0.4 }}>{h}</div>))}
              </div>
              {[...topics].sort((a, b) => mode === "digital" ? b.digitalWeight - a.digitalWeight : b.primeWeight - a.primeWeight).map((t, i) => {
                  const w = mode === "digital" ? t.digitalWeight : t.primeWeight;
                  const done = topicDone(t);
                  return (
                    <div key={t.id} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.7fr 0.8fr 0.6fr", gap: 8, padding: "11px 18px", borderTop: "1px solid #1E293B", alignItems: "center", background: i % 2 === 0 ? "#1E293B" : "#172033" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ width: 10, height: 10, borderRadius: "50%", background: t.color, flexShrink: 0 }}/><span style={{ fontSize: 13, fontWeight: 600, color: "#E2E8F0" }}>{t.name}</span></div>
                      <div><span style={{ fontSize: 16, fontWeight: 800, color: t.color }}>{w}%</span></div>
                      <div><span style={{ fontSize: 11, fontWeight: 700, color: tierColor[t.tier], background: `${tierColor[t.tier]}20`, padding: "2px 8px", borderRadius: 8 }}>T{t.tier} · {tierLabel[t.tier]}</span></div>
                      <div>
                        <div style={{ height: 4, background: "#334155", borderRadius: 4, marginBottom: 4, overflow: "hidden" }}><div style={{ width: `${(done / t.problems.length) * 100}%`, height: "100%", background: t.color, borderRadius: 4 }} /></div>
                        <div style={{ fontSize: 11, color: "#64748B" }}>{done}/{t.problems.length}</div>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: done === t.problems.length ? "#22C55E" : "#64748B" }}>{done === t.problems.length ? "✓ Done" : `${Math.round((done / t.problems.length) * 100)}%`}</div>
                    </div>
                  );
                })}
            </div>

            <div style={{ background: "linear-gradient(135deg, #1E1B4B, #312E81)", borderRadius: 14, padding: "20px 18px", border: "1px solid #4338CA" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 12 }}>{mode === "digital" ? "⚡ Digital Strategy" : "🔥 Prime Strategy"}</div>
              {mode === "digital" ? (
                <div>
                  {[
                    ["Top 4 topics cover 57%", "Arrays (20%) + Strings (15%) + Sorting (12%) + Hashing (10%) — nail these first."],
                    ["Coding round: 2 problems", "Usually 1 Easy + 1 Medium. Speed matters. Aim to finish both in 45 min."],
                    ["Bit Manipulation is underrated", "6% weight and very easy marks — 5 problems, all solvable in under 20 min each."],
                    ["Skip Hard DP & Graphs", "Only 3% combined for Digital. Don't waste time here unless Tier 1 is fully done."],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ display: "flex", gap: 10, marginBottom: 12 }}><div style={{ width: 6, height: 6, borderRadius: "50%", background: "#818CF8", marginTop: 6, flexShrink: 0 }}/><div style={{ fontSize: 13, fontWeight: 700, color: "#C7D2FE" }}>{title}<div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2, lineHeight: 1.5 }}>{desc}</div></div></div>
                  ))}
                </div>
              ) : (
                <div>
                  {[
                    ["DP is now Tier 1 at 15%", "9 DP problems here — must do Knapsack, LCS, Coin Change, LIS. These appear every year."],
                    ["Trees + Graphs = 15% combined", "8 tree + 7 graph problems. BFS, DFS, cycle detection, topo sort are non-negotiable."],
                    ["Coding round: 3 problems", "1 Easy + 1 Medium + 1 Medium-Hard. If you can't do the hard one, do the easy two perfectly."],
                    ["Backtracking is tested", "Subset generation, permutations, maze problems — practice until you can code these in 15 min."],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ display: "flex", gap: 10, marginBottom: 12 }}><div style={{ width: 6, height: 6, borderRadius: "50%", background: "#818CF8", marginTop: 6, flexShrink: 0 }}/><div style={{ fontSize: 13, fontWeight: 700, color: "#C7D2FE" }}>{title}<div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2, lineHeight: 1.5 }}>{desc}</div></div></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ROUTER ────────────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState(null); 
  
  // Highly resilient initialization logic
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem('tcs_students');
      
      if (saved) {
        const parsedSavedStudents = JSON.parse(saved);
        
        // Ensure the saved data is actually an array to prevent crashes
        if (Array.isArray(parsedSavedStudents)) {
          // Always start with the fresh 150 students from the code
          const combinedList = [...INITIAL_STUDENTS];
          
          // Merge in any extra students added via Admin Dashboard
          parsedSavedStudents.forEach(savedStudent => {
            if (savedStudent && savedStudent.id) {
              const exists = combinedList.find(s => s.id === savedStudent.id);
              if (!exists) {
                combinedList.push(savedStudent);
              }
            }
          });
          
          return combinedList;
        }
      }
    } catch (error) {
      console.error("Local storage error, defaulting to initial list:", error);
    }
    
    // Fallback: If anything is broken in local storage, force the 150 students
    return INITIAL_STUDENTS; 
  });

  // Save changes back to local storage
  useEffect(() => {
    localStorage.setItem('tcs_students', JSON.stringify(students));
  }, [students]);

  // Routing Logic
  if (!user) {
    return <Login onLogin={setUser} students={students} />;
  }

  if (user.role === 'admin') {
    return <AdminDashboard onLogout={() => setUser(null)} students={students} setStudents={setStudents} />;
  }

  if (user.role === 'student') {
    return <StudentSheet student={user} onLogout={() => setUser(null)} />;
  }

  return null;
}
