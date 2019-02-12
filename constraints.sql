-- ALTER TABLE chapters
-- ADD FOREIGN KEY fk_chapter(project_id)
-- REFERENCES project(project_id);accounts

-- ALTER TABLE join_info
-- ADD FOREIGN KEY fk_join_info_1(acc_id)
-- REFERENCES accounts(user_id);

-- ALTER TABLE join_info
-- ADD FOREIGN KEY fk_comments_2(acc_id)
-- REFERENCES accounts(user_id);

-- ALTER TABLE volumes
-- ADD FOREIGN KEY fk_volumes_1(project_id)
-- REFERENCES projects(project_id);


ALTER TABLE projects
ADD FOREIGN KEY fk_projects_1(project_creator)
REFERENCES accounts(user_id);

-- ALTER TABLE projects 
-- DROP FOREIGN KEY projects_ibfk_1;

INSERT INTO accounts(user_name, user_pass, user_role, created_date, display_name, user_profile) 
SELECT DISTINCT project_author, '123456', 3, NOW(), project_author, '{}' FROM projects WHERE project_author IS NOT NULL; 