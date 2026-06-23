import { useRef } from "react";
import { CloudUpload } from "lucide-react";

const AvatarUpload = ({ register, watch, setValue }) => {
  const fileInputRef = useRef(null);

  const avatar = watch("avatar");
  const name = watch("name");

  const handleAvatarUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setValue("avatar", reader.result, {
        shouldDirty: true,
        shouldValidate: true,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-8">
      <label className="mb-3 block text-sm font-semibold text-[var(--text-primary)]">
        Profile Avatar
      </label>

      <input type="hidden" {...register("avatar")} />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
        >
          {avatar ? (
            <img
              src={avatar}
              alt={name || "Employee"}
              className="h-full w-full rounded-3xl object-cover"
            />
          ) : (
            <>
              <CloudUpload size={26} />
              <span className="mt-2 text-xs font-semibold">Upload</span>
            </>
          )}
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/svg+xml"
          onChange={handleAvatarUpload}
          className="hidden"
        />

        <p className="max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
          Drag and drop or click to upload. SVG, PNG, or JPG. The uploaded image
          is used as the employee avatar preview.
        </p>
      </div>
    </div>
  );
};

export default AvatarUpload;