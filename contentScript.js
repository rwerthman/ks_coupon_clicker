function clickCoupons() {
    let coupons = document.getElementsByClassName( "CouponActionButton" );
    console.log( "Number of coupons found", coupons.length );

    var i;
    for( i = 0; i < 10; i++ )
    {
        coupons[i].click();
    }

    console.log( "Done clicking on coupons!" );
}

clickCoupons();