<?php 
$title="Contact";
$description="Lone Tree Creative is a Sandpoint, Idaho based full-service design agency, here to make you look amazing. Specializing in branding, web design, print design, and product design.";
$keywords="sandpoint design, sandpoint web design, sandpoint graphic design, idaho design, idaho graphic design, idaho web design, web design, web, designer, site design, graphic design, graphic, graphic designer, brochure design, business card design, pamphlet, catalog design, poster design, custom design, logo, logo design, identity design, branding, seo, search engine optimization, search engine optimisation, social media marketing, print design, coding, front end, wordpress site, custom wordpress theme, idaho design, pacific northwest design, design agency, design firm, you like reading keywords?"; ?>
<?php include('header.php');?>
				
			<h1 class="full">Are you ready for some magic?</h1>
				
			<div class="half first">
				<p>Whatever you need, we are here to help. Drop us a line briefly explaining your business and your project, and we'll get right back to you. We love meeting face-to-face, if possible, to really get a feel for your needs. Email, phone, Skype; anything is alright! We're here to make connections, starting with you.</p><br />
				<p>After an initial consultation, we'll be able to provide a quote and timeline for your project. We don't re-use or re-hash; everything is hand-crafted to produce the best return for your investment, and we carefully monitor the results to ensure that what you get is top-of-the-line, no excuses.</p>
				<div class="clear"></div>
			</div>

			<script type="text/javascript" src="js/mail.js"></script>
			
			<div class="half last">		
				<form method="post" action="php/contact-send.php" id="contact_form">
				
					<p><label class="form_label" for='name'>Name</label>
					<input id='form_name' type='text' name='name' class="textbox" value='' /></p>
					
					<p><label class="form_label" for='email'>E-mail</label>
					<input id='form_email' type='text' name='email' class="textbox" value='' /></p>
					
					<p><label class="form_label" for='message'>Message</label>
					<textarea id='form_message' name='message' class="textbox"></textarea></p>
					
					<input id='form_submit' type='submit' name='submit' value='Send!' onClick="_gaq.push(['_trackEvent', 'Contact Form', 'Form Submit',,, false]);" />
					
					<!-- hidden input for basic spam protection -->
					<div class='hide'>
						<label for='spamCheck'>Do not fill out this field</label>
						<input id="spamCheck" name='spam_check' type='text' value='' />
					</div>
					
				</form><!-- contact form ends here-->	
							
				<!-- This div will be shown if mail was sent successfully -->		
				<div class="hide success">
					<p>Thanks! Your message has been sent.<br /> We'll get back to you right away.</p>
				</div>
			</div>
				

<?php include('footer.php');?>