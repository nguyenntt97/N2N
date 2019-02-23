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

-- USE n2n_v1;
-- ALTER TABLE projects
-- ADD FOREIGN KEY fk_projects_2(project_creator)
-- REFERENCES accounts(user_id);

-- USE n2n_v1;
-- ALTER TABLE projects
-- ADD FOREIGN KEY fk_projects_3(project_author)
-- REFERENCES accounts(user_id);

-- USE n2n_v1;
-- ALTER TABLE projects
-- ADD FOREIGN KEY fk_projects_4(project_artist)
-- REFERENCES accounts(user_id);

-- USE n2n_v1;
-- ALTER TABLE join_info
-- ADD FOREIGN KEY fk_join_info_2(acc_id)
-- REFERENCES accounts(user_id);

-- USE n2n_v1;
-- ALTER TABLE chapters
-- ADD FOREIGN KEY fk_chapters_2(uploader)
-- REFERENCES accounts(acc_id);

USE n2n_v1;
ALTER TABLE edit_permission
ADD FOREIGN KEY fk_edit_permission_2(chap_id)
REFERENCES chapters(chap_id);

-- ALTER TABLE projects 
-- DROP FOREIGN KEY projects_ibfk_1;

INSERT INTO accounts(user_name, user_pass, user_role, created_date, display_name, user_profile) 
SELECT DISTINCT project_author, '123456', 3, NOW(), project_author, '{}' FROM projects WHERE project_author IS NOT NULL; 