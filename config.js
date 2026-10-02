/* =====================================================
   CONFIGURACIÓN DE LA TIENDA — solo cambia lo que está aquí
   ===================================================== */
window.CONFIG = {
  // La página cambia SOLA del precio de lanzamiento al regular en esta fecha y hora (hora de NY)
  launchEnds: "2026-10-04T00:00:00-04:00",   // domingo 4 de octubre

  // Precio por cajita. "pair" = precio por cada 2 cajitas (si no hay, se usa unit × 2)
  prices: {
    launch:  { unit: 20, was: 25 },            // lanzamiento: $20 c/u (antes $25)
    regular: { unit: 25, pair: 45 }            // regular: $25 c/u · 2 por $45
  },

  // Enlaces de pago de Stripe (Payment Links). La página escoge el correcto según la
  // cantidad y la forma de entrega. Si un enlace está vacío "", el botón abre WhatsApp.
  //   local     = recoger en un punto o domicilio local (sin envío), cantidad ajustable
  //   envio1    = envío por correo, 1 cajita
  //   envio2_3  = envío por correo, 2 a 3 cajitas
  //   envio4_6  = envío por correo, 4 a 6 cajitas
  stripe: {
    launch:  { local: "https://buy.stripe.com/7sY4gA9R75Sc3Nu9OCenS05", envio1: "https://buy.stripe.com/cNieVe8N36Wg83KaSGenS06", envio2_3: "", envio4_6: "" },
    regular: { local: "", local2: "", envio1: "", envio2_3: "", envio4_6: "" }
  },

  // URL de la aplicación web de Google Apps Script (registro de pedidos en Google Sheets).
  // Termina en /exec. Si está vacía, los pedidos de Zelle no se registran solos.
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

  // WhatsApp de Mindful Wellness (solo números, con 1 al inicio)
  whatsapp: "12016799969"
};
