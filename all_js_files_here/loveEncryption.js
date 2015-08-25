encryption = {
			encode: function(s) {

			var _newArgs = s.toLowerCase().split(" ");
			var _EncrytConcatText = "",i;
          

			function encryptText (PT) {

				var plaintext =  "abcdefghijklmnopqrstuvwxyz1234567890";
				var ciphertext = "zyxwvutsrqponmlkjihgfedcba1234567890";
				var result = "", A, B, C;
				for( i=0; i<PT.length;i++)
				{
					 A = PT.charAt(i);
					 B = plaintext.indexOf(A);
					 C = ciphertext.charAt(B);
					result = result + C;
				}

				return result;	
			}

        
        
			for( i in _newArgs)
			_EncrytConcatText = _EncrytConcatText + encryptText(_newArgs[i]);


			var prepareText = "";
			for(i=0; i<_EncrytConcatText.length;i++)
			{
				if(prepareText==="")
				prepareText = _EncrytConcatText.substring(i, i+5);
				else
				prepareText = prepareText + " " +  _EncrytConcatText.substring(i, i+5); 
				i=i+4;

			}	




return prepareText;
}//end of encode

};//end of enryption



