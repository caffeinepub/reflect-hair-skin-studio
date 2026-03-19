import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

const serviceOptions = [
  "Hair Artistry",
  "Skin Rituals",
  "Color Mastery",
  "Hair Therapy",
  "Bridal Couture",
  "Men's Grooming",
];

export default function BookingModal({
  open,
  onClose,
  defaultService = "",
}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultService,
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking request:", form);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({
      name: "",
      phone: "",
      service: defaultService,
      date: "",
      message: "",
    });
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      onKeyDown={handleKeyDown}
      data-ocid="booking.modal"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{
          background: "oklch(0.12 0 0)",
          border: "1px solid oklch(0.74 0.07 60 / 0.5)",
        }}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 transition-opacity hover:opacity-60"
          style={{ color: "oklch(0.74 0.07 60)" }}
          data-ocid="booking.close_button"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <p
                className="font-inter text-xs tracking-[0.3em] mb-2"
                style={{ color: "oklch(0.74 0.07 60)" }}
              >
                BOOK AN APPOINTMENT
              </p>
              <h2
                className="font-playfair text-3xl font-bold mb-8"
                style={{ color: "oklch(0.95 0.01 60)" }}
              >
                Reserve Your Session
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="font-inter text-xs tracking-widest block mb-2"
                    style={{ color: "oklch(0.74 0.07 60)" }}
                  >
                    FULL NAME *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full px-4 py-3 font-inter text-sm bg-transparent border outline-none"
                    style={{
                      borderColor: "oklch(0.74 0.07 60 / 0.3)",
                      color: "oklch(0.9 0.01 60)",
                    }}
                    data-ocid="booking.input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="font-inter text-xs tracking-widest block mb-2"
                    style={{ color: "oklch(0.74 0.07 60)" }}
                  >
                    PHONE NUMBER *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full px-4 py-3 font-inter text-sm bg-transparent border outline-none"
                    style={{
                      borderColor: "oklch(0.74 0.07 60 / 0.3)",
                      color: "oklch(0.9 0.01 60)",
                    }}
                    data-ocid="booking.input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-service"
                    className="font-inter text-xs tracking-widest block mb-2"
                    style={{ color: "oklch(0.74 0.07 60)" }}
                  >
                    SERVICE *
                  </label>
                  <select
                    id="booking-service"
                    required
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="w-full px-4 py-3 font-inter text-sm border outline-none appearance-none cursor-pointer"
                    style={{
                      borderColor: "oklch(0.74 0.07 60 / 0.3)",
                      color: form.service
                        ? "oklch(0.9 0.01 60)"
                        : "oklch(0.5 0.01 60)",
                      background: "oklch(0.12 0 0)",
                    }}
                    data-ocid="booking.select"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="booking-date"
                    className="font-inter text-xs tracking-widest block mb-2"
                    style={{ color: "oklch(0.74 0.07 60)" }}
                  >
                    PREFERRED DATE *
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="w-full px-4 py-3 font-inter text-sm bg-transparent border outline-none"
                    style={{
                      borderColor: "oklch(0.74 0.07 60 / 0.3)",
                      color: "oklch(0.9 0.01 60)",
                      colorScheme: "dark",
                    }}
                    data-ocid="booking.input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-message"
                    className="font-inter text-xs tracking-widest block mb-2"
                    style={{ color: "oklch(0.74 0.07 60)" }}
                  >
                    MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    id="booking-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="w-full px-4 py-3 font-inter text-sm bg-transparent border outline-none resize-none"
                    style={{
                      borderColor: "oklch(0.74 0.07 60 / 0.3)",
                      color: "oklch(0.9 0.01 60)",
                    }}
                    data-ocid="booking.textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-inter text-xs tracking-[0.25em] py-4 transition-opacity hover:opacity-85 mt-2"
                  style={{
                    background: "oklch(0.74 0.07 60)",
                    color: "oklch(0.1 0 0)",
                  }}
                  data-ocid="booking.submit_button"
                >
                  CONFIRM BOOKING
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8" data-ocid="booking.success_state">
              <div
                className="text-5xl mb-6"
                style={{ color: "oklch(0.74 0.07 60)" }}
              >
                ✦
              </div>
              <h2
                className="font-playfair text-3xl font-bold mb-4"
                style={{ color: "oklch(0.95 0.01 60)" }}
              >
                Booking Confirmed!
              </h2>
              <p
                className="font-inter text-sm leading-relaxed mb-8"
                style={{ color: "oklch(0.65 0.01 60)" }}
              >
                Thank you, {form.name}. We&apos;ll contact you at {form.phone}{" "}
                to confirm your appointment.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="font-inter text-xs tracking-[0.2em] px-8 py-3 border transition-all hover:bg-gold/10"
                style={{
                  borderColor: "oklch(0.74 0.07 60)",
                  color: "oklch(0.74 0.07 60)",
                }}
                data-ocid="booking.close_button"
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
