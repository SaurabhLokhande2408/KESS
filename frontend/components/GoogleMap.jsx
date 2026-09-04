export default function GoogleMap({
  address = "Ground Floor, Omkar Palace, Office No. 1, Fursungi, Hadapsar, Pune - 15, Maharashtra",
  height = 240,
  className = "",
}) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <div
      className={`w-full overflow-hidden border border-white/10 ${className}`}
    >
      <iframe
        title={`Google Maps - ${address}`}
        src={mapUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}