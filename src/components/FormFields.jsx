export default function FormFields({ register, errors }) {
  return (
    <>
      {/* Title & Description Fields */}
      {[
        { name: "title", placeholder: "Enter Title" },
        { name: "description", placeholder: "Enter Description" },
      ].map(({ name, placeholder }) => (
        <div key={name}>
          <input
            className="search-input"
            placeholder={placeholder}
            {...register(name)}
          />
          {errors[name] && (
            <p className="errorMessage">{errors[name].message}</p>
          )}
        </div>
      ))}

      {/* Date Field */}
      <input className="search-input" type="date" {...register("duedate")} />
      {errors.duedate && (
        <p className="errorMessage">{errors.duedate.message}</p>
      )}

      {/* Time Field */}
      <input className="search-input" type="time" {...register("duetime")} />
      {errors.duetime && (
        <p className="errorMessage">{errors.duetime.message}</p>
      )}

      {/* Priority & Status in Same Row */}
      <div className="row-two">
        <div style={{ flex: 1 }}>
          <select className="search-input" {...register("priority")}>
            <option value="">Select Priority</option>
            {["Low", "Medium", "High"].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.priority && (
            <p className="errorMessage">{errors.priority.message}</p>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <select className="search-input" {...register("status")}>
            <option value="">Select Status</option>
            {["Pending", "In Progress", "Completed"].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.status && (
            <p className="errorMessage">{errors.status.message}</p>
          )}
        </div>
      </div>
    </>
  );
}
