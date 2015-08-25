describe("Suvradip", function() {

    beforeEach(function() {
      cipher = encryption;
    });

    it("encodes no", function() {
        expect(cipher.encode('no')).toEqual('ml');
    });

    it("encodes yes", function() {
        expect(cipher.encode('yes')).toEqual('bvh');
    });

    it("encodes OMG", function() {
        expect(cipher.encode('OMG')).toEqual('lnt');
    });

    it("encodes O M G", function() {
        expect(cipher.encode('O M G')).toEqual('lnt');
    });

    it("encodes long words", function() {
        expect(cipher.encode('mindblowingly')).toEqual('nrmwy oldrm tob');
    });

    it("encodes numbers", function() {
        expect(cipher.encode('Testing, 1 2 3, testing.'))
            .toEqual('gvhgr mt123 gvhgr mt');
    });

    it("encodes sentences", function() {
        expect(cipher.encode('Truth is fiction.')).toEqual('gifgs rhurx grlm');
    });

    it("encodes all the things", function() {
        expect(cipher.encode('The quick brown fox jumps over the lazy dog.'))
            .toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt');
    });


    it("encodes mix things", function() {
        expect(cipher.encode('The !!   3434  $$ quick    \"  \"    !@#$%+{}.,/\{}=-~`       brown fox     ^&*()_      4545_454@@@@      JUMPS OVER the   lazy dog.'))
            .toEqual('gsv34 34jfr xpyil dmulc 45454 54qfn khlev igsvo zabwl t');
    });
});