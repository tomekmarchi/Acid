(function(){
	//define since it's only using already loaded objects attached to $. and we want to immediately invoke the function
	$.define(['console','model'],function(log,model){
		model('art',{
				structure: '                    H\r\n                     |\r\n               H  H  C--H\r\n                `.|,\'|\r\n                  C  H  H\r\n                  |     |\r\n             O    N  H  C\r\n             \\\\ ,\' `.|,\'|`.\r\n               C     C  H  H\r\n               |     |\r\n            H--C     H\r\n             ,\' `.\r\n      H  H--C  H--C--H\r\n      |     ||    |\r\nH     C     C     N  H  H\r\n `. ,\' `. ,\' `. ,\' `.|,\'\r\n   C  _  C  H  C     C\r\n   | (_) |   `.|     |\r\n   C     C     C     H\r\n ,\' `. ,\' `. ,\' `.\r\nH     C     C     H\r\n      |    ||\r\n      N-----C\r\n      |     |\r\n      H     H',
				name:'Lysergic Acid Diethylamide',
				molecule:'(9,10-didehydro-N,N-diethyl-6-methyl-8b-ergoline-8-carboxamide) C20 H25 N3 O'
		},true);
	});

})();
