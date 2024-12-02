import React, { useState } from "react";
import { Input, Select, Button, Card, DatePicker } from "antd";
import Subtask from "./Subtask";

const { Option } = Select;

const Task = ({ project, onAddTask }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    type: "",
    dueDate: null,
    priority: "Moderate",
    subtasks: []
  });

  const taskTypes = {
    "Video Production": [
      "Video X1", 
      "Video X2", 
      "Video + Poster"
    ],
    "Web Development": [
      "Frontend", 
      "Backend", 
      "Full Stack"
    ],
    "UI/UX Design": [
      "UI Design", 
      "UX Research", 
      "Prototype"
    ],
    "Mobile App": [
      "iOS App", 
      "Android App", 
      "Cross Platform"
    ],
    "Poster Design": [
      "Digital Poster", 
      "Print Poster"
    ]
  };

  const priorityLevels = ["Minimal", "Moderate", "Urgent"];

  const generateSubtasks = (projectType, taskType) => {
    const subtaskTemplates = {
      "Video Production": {
        "Video X1": [
          "Scripting", 
          "Shooting", 
          "Editing"
        ],
        "Video X2": [
          "Scripting", 
          "Shooting", 
          "Editing",
          "Client Review"
        ],
        "Video + Poster": [
          "Scripting", 
          "Shooting", 
          "Editing", 
          "Poster Design"
        ]
      },
      "Web Development": {
        "Frontend": [
          "Design", 
          "HTML/CSS", 
          "React Implementation", 
          "Responsive Design"
        ],
        "Backend": [
          "Database Design", 
          "API Development", 
          "Authentication", 
          "Deployment"
        ],
        "Full Stack": [
          "Project Setup", 
          "Frontend", 
          "Backend", 
          "Integration", 
          "Testing"
        ]
      },
      "UI/UX Design": {
        "UI Design": [
          "Wireframing", 
          "Color Palette", 
          "Typography", 
          "Component Design"
        ],
        "UX Research": [
          "User Interviews", 
          "Persona Creation", 
          "Journey Mapping", 
          "Usability Testing"
        ],
        "Prototype": [
          "Low-Fi Prototype", 
          "High-Fi Prototype", 
          "Interactive Prototype", 
          "Client Feedback"
        ]
      }
    };

    return (subtaskTemplates[projectType]?.[taskType] || [])
      .map(title => ({
        title,
        status: "Not Started",
        assignedTo: null,
        dueDate: null
      }));
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.type) {
      const taskToAdd = {
        ...newTask,
        id: Date.now(),
        subtasks: generateSubtasks(project.projectType, newTask.type)
      };

      onAddTask(taskToAdd);
      
      // Reset the new task input
      setNewTask({
        title: "",
        type: "",
        dueDate: null,
        priority: "Moderate",
        subtasks: []
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Add New Task Section */}
      <Card>
        <div className="grid grid-cols-3 gap-4">
          <Input 
            placeholder="Task Title" 
            value={newTask.title}
            onChange={(e) => setNewTask(prev => ({
              ...prev, 
              title: e.target.value
            }))}
          />
          <Select
            placeholder="Task Type"
            value={newTask.type}
            onChange={(value) => setNewTask(prev => ({
              ...prev, 
              type: value
            }))}
          >
            {taskTypes[project.projectType]?.map(type => (
              <Option key={type} value={type}>{type}</Option>
            ))}
          </Select>
          <Select
            placeholder="Priority"
            value={newTask.priority}
            onChange={(value) => setNewTask(prev => ({
              ...prev, 
              priority: value
            }))}
          >
            {priorityLevels.map(level => (
              <Option key={level} value={level}>{level}</Option>
            ))}
          </Select>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <DatePicker 
            placeholder="Due Date"
            onChange={(date) => setNewTask(prev => ({
              ...prev, 
              dueDate: date
            }))}
            className="w-full"
          />
          <Button 
            type="primary" 
            onClick={handleAddTask}
            disabled={!newTask.title || !newTask.type}
          >
            Add Task
          </Button>
        </div>
      </Card>

      {/* Tasks List */}
      {project.tasks.map(task => (
        <Card 
          key={task.id} 
          title={`${task.title} - ${task.type}`}
          extra={`Priority: ${task.priority}`}
          className="mb-4"
        >
          <Subtask
            task={task}
            projectType={project.projectType}
          />
        </Card>
      ))}
    </div>
  );
};

export default Task;