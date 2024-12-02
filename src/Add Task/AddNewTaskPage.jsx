import React, { useState } from "react";
import { Input, DatePicker, Select, Radio } from "antd";
import Titlebar from "../Titlebar";
import SubTask from "./Subtask";
import "./Customany2.css";
import { ArrowUpFromDot, ListCollapse, Maximize2 } from "lucide-react";

const AddNewTaskPage = () => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    dueDate: null,
    deliverable: "Video X1",
    priority: "Urgent",
    subtasks: [],
  });

  const [expandedTaskIndex, setExpandedTaskIndex] = useState(null); // Tracks the expanded task index

  const deliverableOptions = [
    { value: "Video X1", label: "Video X1" },
    { value: "Video X2", label: "Video X2" },
    { value: "Poster", label: "Poster" },
    { value: "Marketing Package", label: "Marketing Package" },
  ];

  const generateSubTasks = (deliverable) => {
    if (deliverable === "Video X1") {
      return [
        {
          title: "Video 1",
          subtasks: [
            { title: "Scripting", dueDate: null, employee: null, process: null },
            { title: "Shooting", dueDate: null, employee: null, process: null },
            { title: "Editing", dueDate: null, employee: null, process: null },
          ],
        },
      ];
    }

    if (deliverable === "Video X2") {
      return [
        {
          title: "Video 1",
          subtasks: [
            { title: "Scripting", dueDate: null, employee: null, process: null },
            { title: "Shooting", dueDate: null, employee: null, process: null },
            { title: "Editing", dueDate: null, employee: null, process: null },
          ],
        },
        {
          title: "Video 2",
          subtasks: [
            { title: "Scripting", dueDate: null, employee: null, process: null },
            { title: "Shooting", dueDate: null, employee: null, process: null },
            { title: "Editing", dueDate: null, employee: null, process: null },
          ],
        },
      ];
    }

    if (deliverable === "Poster") {
      return [
        {
          title: "Poster Design",
          subtasks: [
            { title: "Designing", dueDate: null, employee: null, process: null },
          ],
        },
      ];
    }

    if (deliverable === "Marketing Package") {
      return [
        {
          title: "Social Media Marketing",
          subtasks: [
            {
              title: "Running Campaign",
              dueDate: null,
              employee: null,
              process: null,
            },
            {
              title: "Posting",
              dueDate: null,
              employee: null,
              process: null,
            },
          ],
        },
      ];
    }

    return [];
  };

  const handleInputChange = (field, value) => {
    const newDetails = { ...taskDetails, [field]: value };
    if (field === "deliverable") {
      // Regenerate tasks and subtasks when the deliverable changes
      newDetails.subtasks = generateSubTasks(value);
    }
    setTaskDetails(newDetails);
  };

  const handleSubTaskChange = (taskIndex, subTaskIndex, field, value) => {
    const updatedSubTasks = [...taskDetails.subtasks];
    updatedSubTasks[taskIndex].subtasks[subTaskIndex][field] = value;
    setTaskDetails((prevState) => ({
      ...prevState,
      subtasks: updatedSubTasks,
    }));
  };

  const toggleExpandTask = (index) => {
    if (expandedTaskIndex === index) {
      // If already expanded, collapse it
      setExpandedTaskIndex(null);
    } else {
      // Expand the selected task and collapse others
      setExpandedTaskIndex(index);
    }
  };

  return (
    <div className="space-y-4 lg:w-96 bg-[#F2F2F2] h-screen p-5">
      <Titlebar title={"Add New Task"} />
      <div className="rounded-2xl p-4 bg-white">
        <h2 className="text-sm mb-4">Details of the Task</h2>
        <div className="space-y-4">
          <Input
            placeholder="Client Name"
            value={taskDetails.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="w-full"
          />
          <Input placeholder="Title of the Task" className="w-full" />
          <div className="flex items-center space-x-4">
            <DatePicker
              placeholder="Due Date"
              onChange={(date) => handleInputChange("dueDate", date)}
              className="w-full"
            />
            <Select
              showSearch
              placeholder="Select a deliverable"
              value={taskDetails.deliverable}
              onChange={(value) => handleInputChange("deliverable", value)}
              className="w-full"
              options={deliverableOptions}
            />
          </div>
          <div>
            <h4 className="pb-2 text-sm">Level of Priority</h4>
            <Radio.Group
              value={taskDetails.priority}
              onChange={(e) => handleInputChange("priority", e.target.value)}
              className="flex space-x-4"
            >
              <Radio value="Urgent">Urgent</Radio>
              <Radio value="Moderate">Moderate</Radio>
              <Radio value="Minimal">Minimal</Radio>
            </Radio.Group>
          </div>
        </div>
      </div>

      {/* Display tasks with expand/collapse functionality */}
      {taskDetails.subtasks.map((task, index) => (
        <div key={index} className="bg-white rounded-2xl p-4 mb-4">
          <div className="flex justify-between items-center">
            <h2 className="">{task.title}</h2>
            <button
              className="text-blue-500"
              onClick={() => toggleExpandTask(index)}
            >
              {expandedTaskIndex === index ? 
              <div className="bg-[#F2F2F2] p-2 rounded-lg "> <ArrowUpFromDot size={20} color="#13AE85" strokeWidth={2} className="transition-transform rotate-[270deg] ease-in duration-100"/></div>
              :
              <div className="bg-[#F2F2F2] p-2 rounded-lg"> <ArrowUpFromDot size={20} strokeWidth={2} color="#13AE85" className=" rotate-180 transition-transform ease-linear duration-100"/></div>}
            </button>
          </div>
          {expandedTaskIndex === index && (
            <div className="pt-4">
              {task.subtasks.map((subTask, subIndex) => (
                <SubTask
                  key={subIndex}
                  subTask={subTask}
                  onChange={(field, value) =>
                    handleSubTaskChange(index, subIndex, field, value)
                  }
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddNewTaskPage;
