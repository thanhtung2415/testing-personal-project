# Rubric Alignment - R-CLO1

This document maps the submission to the grading criteria shown in the assignment rubric.

## R-CLO1 Overview

Learning outcome: understand basic software defect concepts, classify defects, and choose suitable testing techniques to detect software defects.

Total points in rubric image: 16 pts.

## Criteria Mapping

| Rubric criteria | Requirement for 4 pts | Evidence in this repository | Current readiness |
| --- | --- | --- | --- |
| R-CLO1-1 - Identify software defects | Classify defect types fully and accurately | `01-blackbox-testing/bug-report.md` includes access control, UI, and performance defect classification. Test files also cover functional, validation, API, UI, and performance risks. | Strong |
| R-CLO1-2 - Explain defect root cause | Explain root cause and occurrence context clearly | Each bug report includes root cause and context. WhiteBox tests also explain logic branches and exception paths. | Strong |
| R-CLO1-3 - Analyze impact | Evaluate impact on system, users, and development process | Each defect includes system impact, user impact, and development impact. Performance and API reports show measurable quality effects. | Strong |
| R-CLO1-4 - Use testing terminology | Use accurate and professional testing terms | Documentation uses terms such as equivalence partitioning, boundary value analysis, decision table, state transition, negative testing, severity, priority, response time, latency, coverage, assertion, CI/CD, and automation. | Strong |

## Where Each Assignment Supports the Rubric

| Assignment | Rubric contribution |
| --- | --- |
| BlackBox Testing | Main evidence for defect identification, classification, cause, impact, and testing terminology. |
| WhiteBox Testing | Shows statement, branch, function, and line coverage with Jest unit tests. |
| SwagStore CI/CD | Shows automated testing and defect prevention through CI/CD workflow. |
| API Testing | Shows assertion-based validation for status codes, response body, auth, CRUD, and negative result after delete. |
| OrangeHRM UI Automation | Shows UI regression testing for login and navigation flows. |
| JMeter Performance Testing | Shows performance validation using response time, sample count, and error rate. |

## Expected Score Against R-CLO1

If the repository is pushed to GitHub with passing Actions and deployment evidence:

| Criteria | Expected score |
| --- | --- |
| R-CLO1-1 | 4 / 4 |
| R-CLO1-2 | 4 / 4 |
| R-CLO1-3 | 4 / 4 |
| R-CLO1-4 | 4 / 4 |

Expected R-CLO1 score: 16 / 16, assuming the teacher accepts the evidence and the GitHub Actions history is complete.

## Remaining Evidence Needed

To make the rubric evidence stronger before final submission:

1. Push the repository in multiple commits over time.
2. Keep screenshots of successful GitHub Actions workflow runs.
3. Add the Render or Railway deployment URL to `README.md`.
4. Attach or reference generated reports: coverage, Newman, Playwright, and JMeter.

