function addCoupons() {
    // Click on king soopers coupons with a delay between clicks
    $(".coupon_action").each(function(index){
        var couponElem = this;
        setTimeout(function() {
            $(couponElem).click();}, index*5000);
    });
}

addCoupons();