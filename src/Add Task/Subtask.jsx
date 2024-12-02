import React from "react";
import { DatePicker, Select } from "antd";
import "./Customany2.css";
import { Maximize2 } from "lucide-react";

const SubTask = ({ subTask, onChange }) => {
  const { title, dueDate, employee, process } = subTask;

  const handleFieldChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="flex flex-col pb-3">
      <div className="flex gap-3 pb-3">
        <span className="text-black text-[14px] font-normal hover:underline cursor-pointer">
          {title}
        </span>
        <div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <DatePicker
          placeholder="Date"
          value={dueDate}
          onChange={(date) => handleFieldChange("dueDate", date)}
          className="w-full"
        //   style={{
        //     backgroundColor: "#D6E0F5",}}
        />
        <Select
          showSearch
          placeholder="Employee"
          value={employee}
          onChange={(value) => handleFieldChange("employee", value)}
          className="w-full"
          options={[
            { value: "Hashim", label: "Hashim" },
            { value: "Nidha", label: "Nidha" },
          ]}
        //   style={{
        //     background: "#D6E0F5 !import",}}
        />
        <Select
          showSearch
          placeholder="Process"
          value={process}
          onChange={(value) => handleFieldChange("process", value)}
          className="w-full"
          options={[
            { value: "Done", label: "Done" },
            { value: "Not Done", label: "Not Done" },
          ]}
        />
      </div>
    </div>
  );
};

export default SubTask;
