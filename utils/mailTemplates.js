/* eslint-disable */
exports.OfferChangeTokenRequest = (token, offer) => `
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
	<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
	<meta content="width=device-width" name="viewport"/>
	<!--[if !mso]><!-->
	<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"/>
	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css"/>
	<!--<![endif]-->
	<style type="text/css">
			body {
				margin: 0;
				padding: 0;
			}

			table,
			td,
			tr {
				vertical-align: top;
				border-collapse: collapse;
			}

			* {
				line-height: inherit;
			}

			a[x-apple-data-detectors=true] {
				color: inherit !important;
				text-decoration: none !important;
			}
		</style>
	<style id="media-query" type="text/css">
			@media (max-width: 620px) {

				.block-grid,
				.col {
					min-width: 320px !important;
					max-width: 100% !important;
					display: block !important;
				}

				.block-grid {
					width: 100% !important;
				}

				.col {
					width: 100% !important;
				}

				.col>div {
					margin: 0 auto;
				}

				img.fullwidth,
				img.fullwidthOnMobile {
					max-width: 100% !important;
				}

				.no-stack .col {
					min-width: 0 !important;
					display: table-cell !important;
				}

				.no-stack.two-up .col {
					width: 50% !important;
				}

				.no-stack .col.num4 {
					width: 33% !important;
				}

				.no-stack .col.num8 {
					width: 66% !important;
				}

				.no-stack .col.num4 {
					width: 33% !important;
				}

				.no-stack .col.num3 {
					width: 25% !important;
				}

				.no-stack .col.num6 {
					width: 50% !important;
				}

				.no-stack .col.num9 {
					width: 75% !important;
				}

				.video-block {
					max-width: none !important;
				}

				.mobile_hide {
					min-height: 0px;
					max-height: 0px;
					max-width: 0px;
					display: none;
					overflow: hidden;
					font-size: 0px;
				}

				.desktop_hide {
					display: block !important;
					max-height: none !important;
				}
			}
		</style>
	</head>
	<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ece8e5;">
	<!--[if IE]><div class="ie-browser"><![endif]-->
	<table bgcolor="#ece8e5" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ece8e5; width: 100%;" valign="top" width="100%">
	<tbody>
	<tr style="vertical-align: top;" valign="top">
	<td style="word-break: break-word; vertical-align: top;" valign="top">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#ece8e5"><![endif]-->
	<div style="background-color:transparent;">
	<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
	<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
	<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#ffffff;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:60px;"><![endif]-->
	<div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">
	<div style="width:100% !important;">
	<!--[if (!mso)&(!IE)]><!-->
	<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:60px; padding-bottom:60px; padding-right: 0px; padding-left: 0px;">
	<!--<![endif]-->
	<div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
	<div style="font-size:1px;line-height:35px"> </div><a href="https://wangen-hilft.de" style="outline:none" tabindex="-1" target="_blank"> <img align="center" alt="Logo" border="0" class="center autowidth" src="data:image/png;base64,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" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; width: 100%; max-width: 216px; display: block;" title="Logo" width="216"/></a>
	<div style="font-size:1px;line-height:30px"> </div>
	<!--[if mso]></td></tr></table><![endif]-->
	</div>
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
	<div style="color:#000000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
	<div style="font-size: 14px; line-height: 1.2; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; color: #000000; mso-line-height-alt: 17px;">
	<p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 17px; margin: 0;"><span style="color: #000000;"><strong><span style="font-size: 72px;">Wangen</span></strong></span></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
	<div style="color:#2b5512;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<div style="line-height: 1.2; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; font-size: 12px; color: #2b5512; mso-line-height-alt: 14px;">
	<p style="font-size: 72px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 86px; margin: 0;"><span style="font-size: 72px; color: #000000;"><strong>Hilft</strong></span></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 25px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
	<div style="color:#555555;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.8;padding-top:10px;padding-right:40px;padding-bottom:25px;padding-left:40px;">
	<div style="font-size: 14px; line-height: 1.8; color: #555555; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 25px;">
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;"><strong>Du hast einen Link zum Bearbeiten dein Angebots angeforder.</strong></p>
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;"><strong><u>Dieser Link ist für 48 Stunden gültig.</u> Danach muss ein neuer angefordert werden!</strong></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://wangen-hilft.de/offer/edit/${offer.id}/${token}" style="height:49.5pt; width:216.75pt; v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#547349"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, Verdana, sans-serif; font-size:18px"><![endif]--><a href="https://wangen-hilft.de/offer/edit/${offer.id}/${token}" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #547349; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width: auto; width: auto; border-top: 1px solid #547349; border-right: 1px solid #547349; border-bottom: 1px solid #547349; border-left: 1px solid #547349; padding-top: 15px; padding-bottom: 15px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:40px;padding-right:40px;font-size:18px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 18px; line-height: 36px;" style="font-size: 18px; line-height: 36px;"><strong>Angebot Ändern</strong></span></span></span></a>
	<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
	</div>
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 25px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
	<div style="color:#555555;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.8;padding-top:10px;padding-right:40px;padding-bottom:25px;padding-left:40px;">
	<div style="font-size: 14px; line-height: 1.8; color: #555555; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 25px;">
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;"><strong><span style="font-size: 16px;">Informationen zum Angebot:</span></strong></p>
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;"><strong>Titel:</strong></p>
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;">${offer.title}</p>
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;"><strong>Kategorie:</strong></p>
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;">${offer.category.title}</p>
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;"><strong>Beschreibung:</strong></p>
	<p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: center; mso-line-height-alt: 25px; margin: 0;">${offer.description}</p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
	<div style="color:#000000;font-family:'Ubuntu', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<div style="line-height: 1.2; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; font-size: 12px; color: #000000; mso-line-height-alt: 14px;">
	<p style="font-size: 64px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Ubuntu, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 77px; margin: 0;"><span style="font-size: 64px;"><strong>Danke </strong></span><span style="font-size: 64px;"><strong>für</strong></span></p>
	<p style="font-size: 64px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Ubuntu, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 77px; margin: 0;"><span style="font-size: 64px;"><strong>Deine Unterstützung!</strong></span></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
	<tbody>
	<tr style="vertical-align: top;" valign="top">
	<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
	<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #EAEAEA; width: 100%;" valign="top" width="100%">
	<tbody>
	<tr style="vertical-align: top;" valign="top">
	<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
	</tr>
	</tbody>
	</table>
	</td>
	</tr>
	</tbody>
	</table>
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
	<div style="color:#000000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<div style="font-size: 14px; line-height: 1.5; color: #000000; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px;">
	<p style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 12px;">© Copyright Wangen Hilft 2020.</span></p>
	<p style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 12px;">All rights reserved.</span></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if (!mso)&(!IE)]><!-->
	</div>
	<!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	</td>
	</tr>
	</tbody>
	</table>
	<!--[if (IE)]></div><![endif]-->
	</body>
	</html>
`;
