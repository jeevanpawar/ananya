<?php
	error_reporting(0);
	include("admin/config.inc.php");
	
	$qry="select * from beauty where b_id='2'";
	$res=mysql_query($qry);
	$row=mysql_fetch_array($res);

?>
<html>

	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<title>Ananya Cosmetics</title>
		
		<link href="css/bootstrap.min.css" rel="stylesheet" />
		<link href="css/style.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        <link rel="stylesheet" type="text/css" href="css/imitation.css" />

<!-- js files -->
<!-- color picker -->
<!-- jQuery framework -->
<script type="text/javascript" src="jscolor/jscolor.js"></script>
<!-- jQuery framework -->
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<!-- jQueriy easing plugin-->
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<!-- lhpTwoColorButton plugin -->
<script type="text/javascript" src="js/jquery.lhpTwoColorButton.min.js"></script>
<!-- lhpTwoColorButton plugin -->
<script type="text/javascript" src="js/jquery.lhpMenuTwoColorButton.min.js"></script>
<!-- preview main js code -->
<script type="text/javascript" src="js/main.js"></script>

<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<!-- jQueriy easing plugin-->
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<!-- lhpTwoColorButton plugin -->
<script type="text/javascript" src="js/jquery.lhpTwoColorButton.min.js"></script>
<!-- lhpTwoColorButton plugin -->
<!-- preview main js code -->
<script type="text/javascript" src="js/main.js"></script>

<script type="text/javascript" src="jscolor/jscolor.js"></script>
        <!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="css/ie8.css" /><![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>

	<body class="main-category">
		<div class="header-container">
        
			<div class="diagonal-holder hidden-phone">
				<div class="slider-diagonal-overflow">
					<div class="slider-diagonal rotate315"></div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="span12">
						<div class="header">
							
							<div class="row1">
								<div class="span3">
                                <a href="#" id="logo"><img class="logo_c" src="media/LOGO/logo.png"></a>
								</div>
								<div class="span8 offset1">
									<ul id="menu">
                                    <li><a href="index.html">Home</a>
										<li><a href="products.html">Products</a>
											<div class="child-nav" style="display: none;">
												<div class="child-menu">
													<ul class="child-menu-main">
														<li><a href="http://www.olay.in/Pages/DefaultFlash.aspx" target="_tab">OLAY</a></li>
														<li><a href="http://www.lakmesalon.com" target="_tab">LAKME</a></li>
														<li><a href="http://www.dove.us" target="_tab">DOVE</a></li>
														<li><a href="http://www.garnier.in/_en/_in/home.aspx" target="_tab">GARNIER</a></li>
														<li><a href="http://ponds.in" target="_tab">PONDS</a></li>
														<li><a href="http://www.loreal.co.in/_hi/_in/index.aspx" target="_tab">L'OREAL</a></li>
												</div>
												
											</div>
										</li>
										<li><a href="imitation.html">Imitation Jwellery</a></li>
										<li><a href="tips.html">Beauty Tips</a>
                                        <div class="child-nav" style="display: none;">
												<div class="child-menu">
													<ul class="child-menu-main">
														<li><a href="hairs.php">HAIR</a></li>
														<li><a href="eyes.php">EYES</a></li>
														<li><a href="nose.php">NOSE</a></li>
														<li><a href="lips.php">LIPS</a></li>
														<li><a href="face.php">FACE</a></li>
														<li><a href="neck.php">NECK</a></li>
                                                        <li><a href="breast.php">BREAST</a></li>
                                                        <li><a href="nails.php">NAILS</a></li>
                                                        <li><a href="skin.php">SKIN</a></li>
                                                        <li><a href="foot.php">FOOT</a></li>
                                                    </ul>
												</div>
												
											</div>
                                        
                                        </li>
										<li><a href="contact.html">Contact</a></li>
										
										
									</ul>
								</div>
							</div>
						</div><!-- end header -->
					</div>
				</div>

				<div class="row">
					<div class="span12 category-info">
						&nbsp;
						<p class="uber-text">Featured Products</p>
					</div>
				</div>

				<div class="row">
					<div class="main-category-slider">
						<div>
							<div class="span2 product-small">
								<div class="product-overflow-keeper">
									<img class="product-image" src="media/jwellery/product-small-1.png" />
									<div class="product-info">
										<span class="product-price">&nbsp;</span>
										<a href="#" class="product-name">&nbsp;</a>
									</div>
									<div class="product-hover">
										<a href="#">&nbsp;</a>
										<a href="#">&nbsp;</a>
										<a href="#">&nbsp;</a>
									</div>
								</div>
								<div class="product-badge rotate290">
									<span>bestseller</span>
								</div>
							</div>
							<div class="span2 product-small">
								<div class="product-overflow-keeper">
									<img class="product-image" src="media/jwellery/product-small-2.png" />
									<div class="product-info">
										<span class="product-price">&nbsp;</span>
										<a href="#" class="product-name">&nbsp;</a>
									</div>
									<div class="product-hover">
										<a href="#">&nbsp;</a>
										<a href="#">&nbsp;</a>
										<a href="#"></a>
									</div>
								</div>
							</div>
							<div class="span2 product-small">
								<div class="product-overflow-keeper">
									<img class="product-image" src="media/jwellery/product-small-3.png" />
									<div class="product-info">
										<span class="product-price">&nbsp;</span>
										<a href="#" class="product-name">&nbsp;</a>
									</div>
									<div class="product-hover">
										<a href="#">&nbsp;</a>
										<a href="#">&nbsp;</a>
										<a href="#"></a>
									</div>
								</div>
							</div>
							<div class="span2 product-small">
								<div class="product-overflow-keeper">
									<img class="product-image" src="media/jwellery/product-small-4.png" />
									<div class="product-info">
										<span class="product-price">&nbsp;</span>
										<a href="#" class="product-name">&nbsp;</a>
									</div>
									<div class="product-hover">
										<a href="#">&nbsp;</a>
										<a href="#">&nbsp;</a>
										<a href="#">&nbsp;</a>
									</div>
								</div>
								<div class="product-badge rotate290">
									<span>bestseller</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 
				<div class="row">
					<div class="span2 offset6">
						<ul id="slider-nav">
							<li><a href="#" class="nav-active">1</a> /</li>
							<li><a href="#">2</a> /</li>
							<li><a href="#">3</a></li>
						</ul>
					</div>
				</div>
				-->
			</div><!-- end container -->
		</div><!-- end header container -->


		<div class="container">
			<div class="row">
				<div class="span3 side-options phone-span-diff">
					
					
					
					<div class="t_name"><?php echo $row[1]; ?></div>
                    <br>
					<div class="row">
						<div class="span2 product-small">
							<div class="product-overflow-keeper">
								<img class="product-image" src="media/eye.jpg" />
								<div class="product-info">
									<span class="product-price">&nbsp;</span>
									<a href="#" class="product-name">&nbsp;</a>
								</div>
								<div class="product-hover">
									<a href="#">&nbsp;</a>
									<a href="#">&nbsp;</a>
									<a href="#">&nbsp;</a>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			<div class="b_tip">
            Beauty Tips
			</div>
            <div class="tips">
            <?php echo $row[2]; ?>
            </div>
            <div class="tips">
            <?php echo $row[3]; ?>
            </div>
            <div class="tips">
            <?php echo $row[4]; ?>
            </div>	
			</div>
		</div><!-- end container -->


		<div class="footer-container inset-shadow">
			<div class="container footer">
				<div class="row">
					<div class="span3">
						<h2 class="footer-heading">Post Your Add Here</h2>
					</div>
					<div class="span2 offset1">
						<h2 class="footer-heading">Information</h2>
					</div>
					<div class="span2">
						<h2 class="footer-heading">Cust. Service</h2>
					</div>
					<div class="span3 offset1">
						<h2 class="footer-heading">Contact Us</h2>
					</div>
				</div>

				<div class="row">
					<div class="span3">
						<div class="footer-bag">
							<p>Post Adds Here</p>
						</div>
						<a href="#" class="footer-promo">Post Add</a>
					</div>
					<div class="span4 offset1">
						<div class="row">
							<div class="span2">
								<ul class="footer-nav-group">
									<li><a href="#">About us</a></li>
									<li><a href="#">Delivery</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Terms and Conditions</a></li>
								</ul>
							</div>
							<div class="span2">
								<ul class="footer-nav-group">
									<li><a href="contact.html">Contact us</a></li>
									<li><a href="#">Returns</a></li>
									<li><a href="#">Rates</a></li>
									<li><a href="#">Site Map</a></li>
								</ul>
							</div>
						</div>
						<div class="row">
							<div class="span2">
								<h2 class="footer-heading">Extras</h2>
							</div>
							<div class="span2">
								<h2 class="footer-heading">My Account</h2>
							</div>
						</div>
						<div class="row">
							<div class="span2">
								<ul class="footer-nav-group">
									<li><a href="#">Brands</a></li>
									<li><a href="#">Gift Vouchers</a></li>
									<li><a href="#">Affiliates</a></li>
									<li><a href="#">Specials</a></li>
								</ul>
							</div>
							<div class="span2">
								<ul class="footer-nav-group">
									<li><a href="#">Settings</a></li>
									<li><a href="#">Order History</a></li>
									<li><a href="#">Wishlist</a></li>
									<li><a href="#">Newsletter</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="span3 offset1">
						<div class="google-map"><iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=77+charterhouse+street+london&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=39.371738,86.572266&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=77+Charterhouse+St,+London+Borough+of+Islington,+London+EC1M,+United+Kingdom&amp;ll=51.52012,-0.100422&amp;spn=0.025635,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /></div>
						<a href="#" class="mailto"><i class="icon-envelope"></i> jordan.grozdanov@gmail.com</a>
					</div>
				</div>

				<div class="row">
					<div class="span9">
						<ul class="social-links">
							<li><a href="#" id="facebook">Facebook</a></li>
							<li><a href="http://twitter.com/jgrozdanov" id="twitter">Twitter</a></li>
							<li><a href="#" id="google">Google+</a></li>
							<li><a href="#" id="tumblr">Tumblr</a></li>
							<li><a href="#" id="vimeo">Vimeo</a></li>
							<li><a href="#" id="youtube">YouTube</a></li>
						</ul>
					</div>
					<div class="span3">
						<p class="phones"><i class="icon-info-sign"></i> 0207 887 2614 0207 887 2615 0207 887 2613</p>
					</div>
				</div>

				<div class="row">
					<div class="span7 copyrights">
						<a href="index.html">Copyright @ Ananya Cosmetics 2013.</a>
						<p>
							Powered By <a href="http://www.wavetechline.com" target="_tab">Wavetechline India P.V.T.</a> All rights reserved.
						</p>
					</div>
					<div class="span5">
						&nbsp;
					</div>
				</div>
			</div><!-- end container /footer/ -->
		</div><!-- end footer-container -->

		<script src="js/hover.intent.js"></script>
		<script src="js/respond.min.js"></script>
		<script src="js/header.js"></script>
		<script src="js/products.js"></script>

	</body>

</html>

