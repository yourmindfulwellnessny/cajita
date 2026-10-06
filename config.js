/* =====================================================
   CONFIGURACIÓN DE LA TIENDA — solo cambia lo que está aquí
   ===================================================== */
window.CONFIG = {
  // La página cambia SOLA del precio de lanzamiento al regular en esta fecha y hora (hora de NY)
  launchEnds: "2026-10-05T00:00:00-04:00",   // termina el domingo 4 a medianoche (hora de NY) — extendido el 3 oct

  // PRECIOS
  //   launch  = lanzamiento (hasta el domingo 4): $20 c/u (antes $25)
  //   regular = desde el lunes 5: $25 c/u, y precio especial por paquete de 2 o de 3.
  //             "bundles" = precio TOTAL del paquete. Para 4 o más se combinan paquetes
  //             de la forma más barata para la clienta (ej.: 4 = 3 + 1).
  prices: {
    launch:  { unit: 20, was: 25 },
    regular: { unit: 25, bundles: { 2: 45, 3: 65 } }
  },

  // ENLACES DE PAGO DE STRIPE (Payment Links)
  // Si un enlace está vacío "", el botón de tarjeta abre WhatsApp con el pedido escrito.
  //
  // launch (no cambia): un solo enlace por grupo, con cantidad ajustable en Stripe.
  //   local = recoger o domicilio local · envio1 = 1 cajita · envio2_3 = 2–3 · envio4_6 = 4–6
  //
  // regular: UN enlace por paquete, con la cantidad FIJA en Stripe (no ajustable).
  //   local1 / local2 / local3 = 1, 2 o 3 cajitas SIN envío ($25 / $45 / $65)
  //   envio1 / envio2 / envio3 = 1, 2 o 3 cajitas CON envío USPS (opciones Región A, B, C)
  //   4 o más cajitas con tarjeta → WhatsApp (o pagan por Zelle desde la página).
  stripe: {
    launch:  { local: "https://buy.stripe.com/7sY4gA9R75Sc3Nu9OCenS05", envio1: "https://buy.stripe.com/cNieVe8N36Wg83KaSGenS06", envio2_3: "https://buy.stripe.com/fZu8wQbZf2G0es8d0OenS07", envio4_6: "https://buy.stripe.com/3cI5kEbZf5Sc6ZGbWKenS08" },
    regular: {
      local1: "https://buy.stripe.com/9B6dRabZf3K45VC3qeenS09",   // 1 cajita $25
      local2: "https://buy.stripe.com/4gM5kE4wNcgAabS1i6enS0a",   // paquete 2 $45
      local3: "https://buy.stripe.com/eVqfZi3sJeoI4Ry2maenS0h",   // paquete 3 $65
      envio1: "https://buy.stripe.com/5kQ6oI3sJ94o2Jq4uienS0c",   // 1 cajita + envío (A/B/C)
      envio2: "https://buy.stripe.com/fZudRabZf80k1Fm5ymenS0d",   // paquete 2 + envío 2–3
      envio3: "https://buy.stripe.com/dRm3cwd3jeoI5VCaSGenS0i"    // paquete 3 + envío 2–3
    }
  },

  // URL de la aplicación web de Google Apps Script (registro de pedidos en Google Sheets).
  // Termina en /exec. Si está vacía, los pedidos NO se registran solos.
  sheetUrl: "",

  // ENVÍO POR CORREO · USPS Ground Advantage desde Wallington, NJ 07057
  // Tarifas oficiales USPS al público (vigentes desde el 12 jul 2026) + recargo temporal
  // de temporada navideña (4 oct 2026 – 17 ene 2027): +$0.50 zonas 1–4, +$0.75 zonas 5–9.
  // Peso: 1 cajita = 5 oz. Hasta 3 cajitas < 16 oz. 4 a 6 cajitas < 2 lb.
  // Cada región cobra la zona USPS más alta de esa región.
  shipping: {
    tiers: [
      { max: 1, rates: { A: 8.80,  B: 9.50,  C: 10.20 } },   // hasta 8 oz
      { max: 3, rates: { A: 11.10, B: 12.10, C: 13.65 } },   // 9 a 15.99 oz
      { max: 6, rates: { A: 13.50, B: 15.85, C: 19.80 } }    // hasta 2 lb
    ],                                                        // 7 o más: se cotiza por WhatsApp
    regions: {
      A: ["NJ","NY","PA","CT","DE","MD","DC","MA","RI","NH","VT","VA","WV"],
      B: ["ME","NC","OH","SC","GA","FL","AL","TN","KY","IN","MI","IL","WI","MS","MN","IA","MO","AR","LA"],
      C: ["TX","OK","KS","NE","SD","ND","CO","NM","WY","MT","ID","UT","AZ","NV","CA","OR","WA","AK","HI","PR","VI","GU","AS","MP","AA","AE","AP"]
    }
  },

  maxQty: 20,

  // Video de lanzamiento (súbelo a la carpeta assets con este nombre). Si no existe, la sección no aparece.
  video: "assets/lanzamiento.mp4",

  // WhatsApp de Mindful Wellness (solo números, con 1 al inicio)
  whatsapp: "12016799969"
};
