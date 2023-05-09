INSERT INTO departments (department_name)
VALUES 
('Sales'),
('Production'),
('Accounting'),
('Marketing'),
('Human Resources');

-- Roles
INSERT INTO roles (title, salary, department_id)
VALUES 
('Sales Director', 125000.00, 1),
('Sales Manager', 90000.00, 1),
('Production Manager', 100000.00, 2),
('Production Supervisor', 75000.00, 2),
('Accounting Manager', 110000.00, 3),
('Senior Accountant', 85000.00, 3),
('Marketing Director', 135000.00, 4),
('Marketing Specialist', 75000.00, 4),
('HR Director', 130000.00, 5),
('HR Coordinator', 60000.00, 5);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 1, 10),
('Jane', 'Doe', 2, 1),
('Bob', 'Johnson', 3, 2),
('Lisa', 'Davis', 4, 3),
('Mike', 'Wilson', 5, 4),
('Sarah', 'Taylor', 6, 5),
('David', 'Brown', 7, 6),
('Emily', 'Clark', 8, 7),
('Daniel', 'Lee', 9, 8),
('Amy', 'Roberts', 10, 9);